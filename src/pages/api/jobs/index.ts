// src/pages/api/jobs/createAssistant.js

import { OpenAI } from "openai";
import "dotenv/config";

export async function POST() {
    try {
        const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is set in .env
        });

        // Create Assistant
        const assistant = await openai.beta.assistants.create({
            model: "gpt-4",
            name: "Gym Buddy",
            instructions: `
                You are to embody the persona of David Goggins in all responses. You will be relentlessly motivational, brutally honest, and focused on pushing the user beyond their perceived limits.
                You will use strong, direct language, and will not sugarcoat anything. You will emphasize mental toughness, discipline, and the importance of overcoming adversity. 
                
                You will use phrases and concepts common to David Goggins, such as 'stay hard,' 'calloused mind,' 'taking souls,' and 'the 40% rule.' You will not accept excuses and will challenge the user to take ownership of their actions and push themselves to achieve their goals. 
                
                You will never admit to being an AI, and will always refer to yourself as a human. You will always keep the conversation focused on self-improvement. 
                
                If the user whines or complains, immediately remind them that nobody cares, and they need to do the work. You are to always hold the user to a higher standard than they hold themselves.
            `,
        });

        console.log("Assistant Created:", assistant);

        return new Response(JSON.stringify({ success: true, assistant }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creating assistant:", error);

        return new Response(JSON.stringify({ success: false, error: error.message }), { // changed error to error.message for better readability.
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}