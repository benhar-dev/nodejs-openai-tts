# Node.js OpenAI Text-to-Speech

This repository contains a Node.js application that demonstrates the use of OpenAI's text-to-speech (TTS) API. The script converts a given text into speech and saves it as an MP3 file.

## Features

- Utilizes OpenAI's TTS API.
- Converts text to speech and saves as an MP3 file.

## Prerequisites

Before running this project, make sure you have:

- Node.js installed on your system.
- An API key from OpenAI.

## Installation

1. Clone the Repository:
   ```bash
   git clone https://github.com/benhar-dev/nodejs-openai-tts.git
   cd nodejs-openai-tts
   ```
2. Install Dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a .env file in the root directory of the project and add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

Replace your_api_key_here with your actual OpenAI API key.

## Running the Application

Run the application using the following command:

```
node index.js
```
