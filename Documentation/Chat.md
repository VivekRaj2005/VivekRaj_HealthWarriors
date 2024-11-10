# Chat Component Documentation
## Overview
The Chat component provides an interface where users can interact with a chatbot in different languages. Users can type messages, select a preferred language, and send messages, receiving responses from a backend API.

## Dependencies
1. @chatscope/chat-ui-kit: Provides pre-built UI components for chat interfaces.
2. React: Core framework used for creating the component.
2. TailwindCSS: Utility-first CSS framework for styling.

## Props
This component does not take any props.

## State Variables
1. text (string): Stores the current text input from the user.
2. chats (MessageModel[]): Array storing chat messages, both outgoing (user) and incoming (bot).
3. lang (string): Stores the selected language identifier (e.g., "1" for Gujarati, "4" for English, etc.).

## Functions
1. `addChat(chat: string, incoming: boolean)`
Adds a new message to the chats array and updates the input field. This function:

- Creates a MessageModel object for each chat.
- Adds the message to chats using the state updater to avoid direct mutation.

Parameters:
- chat: The message content as a string.
- incoming: A boolean indicating if the message is from the bot (true) or the user (false).

2. `getChat()`
Handles the sending of messages to the backend API and receiving the response.

- Adds the user's message to the chat with addChat.
- Sends a POST request to the API with the current text and lang values.
- Processes the response and adds the bot's reply to chats using addChat.

3. `setLang(langId: string)`
Updates the lang state with the selected language ID when a language option is clicked.

## UI Structure

1. Language Selection
Displays a grid of selectable language options. Each language card dynamically updates based on the lang state to show the selected language with a different style.

2. Chat Interface
Displays the conversation using MessageList and Message components.
Includes:
- MessageInput: Text input field for the user to type a message.
- Send Button: Initiates getChat to send the message.