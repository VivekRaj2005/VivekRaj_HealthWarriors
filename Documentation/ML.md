# Multilingual Medical Assistant API

This project provides an API service using Flask to create a multilingual medical assistant model. The assistant suggests instructions based on symptoms provided by users in various languages. The model utilizes OpenAI's ChatGroq API for natural language processing.

## Features

- **Multilingual Support**: Generates medical instructions in Gujarati, Marathi, Hindi, and English.
- **Few-Shot Learning**: Selects examples from a dataset to improve response quality.
- **API Key Rotation**: Cycles through multiple API keys for load management and retry logic.
- **Flask API**: A RESTful API to interact with the model, including cross-origin resource sharing (CORS) support for frontend integration.

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd <repo-directory>
```

2. Install Requirements

```bash
pip install -r requirements.txt
```

## Project Structure

- app.py: Main file that initializes the Flask API and manages language selection, example loading, and API calls.
- medico.csv: CSV file containing symptoms and associated instructions for example-based learning.

## Example Request

```json
{
  "data": "cough and fever",
  "lang": 1
}
```

## Expected Response

```json
{
  "instruction": "<generated instruction>"
}
```

# Code Details

- Flask and CORS: The Flask app handles POST requests, processes user input, and sends back the response. CORS is enabled to allow cross-origin requests.
- Few-Shot Learning: The select_samples function selects examples from medico.csv to use in the few-shot prompt generation for the model.
- API Key Rotation: The API key is rotated on each call to distribute load.
- Language Selection: The get_instruction function supports Gujarati, Marathi, Hindi, and English based on user input.

# Functions
## select_samples(labels, samples_per_class): 
    - Chooses a few samples per class for the few-shot prompt.
## create_few_shot_prompt(examples, query_input, language): 
    - Creates a custom prompt with examples to guide the model.
## get_instruction(symptom, language_choice): 
    - Retrieves the instruction based on the provided symptom and selected language.
## make_api_call(prompt, max_retries): 
    - Calls the ChatGroq model API, with retries for handling errors.


