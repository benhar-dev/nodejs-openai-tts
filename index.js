const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI(process.env.OPENAI_API_KEY);

const speechFile = path.resolve("./speech.mp3");

async function main() {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "shimmer",
      input:
        "Welcome to coding bytes! Here is an node.js project which uses the open ai tts api.",
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
