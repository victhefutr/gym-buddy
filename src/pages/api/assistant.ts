// File: src/lib/openai-assistant.js

/**
 * Functions to interact with the OpenAI Assistant API endpoints
 */

const API_BASE_URL = 'http://localhost:8000'; // Replace with your actual API URL

/**
 * Creates a new OpenAI assistant
 * @param {string} name - Assistant name
 * @param {string} instructions - Instructions for the assistant
 * @returns {Promise<{assistant_id: string}>} - The created assistant ID
 */
export async function createAssistant(name : string, instructions : string) {
    try {
        const response = await fetch(`${API_BASE_URL}/create_assistant`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            instructions,
        }),
        });

        if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to create assistant');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating assistant:', error);
        throw error;
    }
}

/**
 * Creates a new thread with an initial message
 * @param {string} initialMessage - The first message to start the thread
 * @returns {Promise<{thread_id: string}>} - The created thread ID
 */
export async function createThread(initialMessage : string) {
    try {
        const response = await fetch(`${API_BASE_URL}/create_thread`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            initial_message: initialMessage,
        }),
        });

        if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to create thread');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating thread:', error);
        throw error;
    }
}

/**
 * Sends a message to the assistant and waits for a response
 * @param {string} content - Message content
 * @param {string} threadId - The thread ID
 * @param {string} assistantId - The assistant ID
 * @returns {Promise<{response: string}>} - The assistant's response
 */
export async function sendMessage(content : string, threadId : string, assistantId : string, username : string) {
    try {
        const response = await fetch(`${API_BASE_URL}/send_message/${username}/${threadId}/${assistantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
        });

        if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Failed to send message');
        }

        return await response.json();
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}