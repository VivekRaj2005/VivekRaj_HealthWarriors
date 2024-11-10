import numpy as np
import pandas as pd
import time
from langchain_groq.chat_models import ChatGroq
import os
from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)

api_key = "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"

# Ensure api_keys is properly defined
if api_key is None:
    raise ValueError("API_KEY_M environment variable not found")

api_keys = api_key.split(',')
current_index = 0

groq_models = {
    "llama3.1-70b": "llama-3.1-70b-versatile"
}

# Load the CSV file (update the path as needed)
df = pd.read_csv(os.path.join(os.getcwd(), 'medico.csv'),
                 names=['symptoms', 'instruction'])
print("Data loaded successfully")


def select_samples(labels, samples_per_class):
    selected_indices = []
    class_count = {label: 0 for label in set(labels)}
    for i, label in enumerate(labels):
        if class_count[label] < samples_per_class:
            selected_indices.append(i)
            class_count[label] += 1
        if all(count >= samples_per_class for count in class_count.values()):
            break
    return selected_indices


samples_per_class = 3  # Adjust as needed
selected_indices = select_samples(df['instruction'], samples_per_class)
few_shot_examples = [
    {"input": df['symptoms'][i], "label": df['instruction'][i]}
    for i in selected_indices
]


def create_few_shot_prompt(examples, query_input, language):
    description = f'''You are a multilingual medical assistant model that helps suggest instructions based on symptoms provided.
                      Provide instructions in the selected language. Language: {language}'''
    prompt = description + '\nHere are some examples:\n'
    for ex in examples:
        prompt += f"Symptom: {ex['input']}\nInstruction: {ex['label']}\n\n"
    prompt += f"Now, provide the instruction for the following symptom in {language}:\nSymptom: {query_input}\nInstruction: "
    return prompt


def get_next_api_key():
    global current_index
    current_index = (current_index + 1) % len(api_keys)
    return api_keys[current_index]


def make_api_call(prompt, max_retries=3):
    retries = 0
    while retries < max_retries:
        try:
            api_key = get_next_api_key()
            llm = ChatGroq(
                model=groq_models["llama3.1-70b"], api_key=api_key, temperature=0)
            response = llm.invoke(prompt)
            return response
        except Exception as e:
            retries += 1
            print(f"API call failed: {e}. Retrying...")
            time.sleep(10)
    raise RuntimeError("Failed after maximum retries")


def get_instruction(symptom, language_choice):
    lang_map = {
        1: 'Gujarati',
        2: 'Marathi',
        3: 'Hindi',
        4: 'English'
    }
    if language_choice not in lang_map:
        language = 'English'  # Default to English if invalid choice
    else:
        language = lang_map[language_choice]

    prompt = create_few_shot_prompt(few_shot_examples, symptom, language)
    response = make_api_call(prompt)
    return response.content.strip()

# Main function to interact with user


def main():
    print("Please select your preferred language:")
    print("1) Gujarati\n2) Marathi\n3) Hindi\n4) English")
    language_choice = int(
        input("Enter the number corresponding to your preferred language: "))

    symptom = input("Enter your symptom: ")
    instruction = get_instruction(symptom, language_choice)
    print(f"Symptom: {symptom}")
    print(f"Instruction: {instruction}")


@app.route("/api/chat", methods=["POST"])
@cross_origin()
def API():
    print(request.data.decode("utf-8") , type(request.data))
    data = json.loads(request.data.decode("utf-8") )
    prompt = data['data']
    lang = int(data['lang'])
    instruction = get_instruction(prompt, lang)
    print(instruction)
    return {"instruction": instruction}


app.run(debug=True)
