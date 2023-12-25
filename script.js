
document.getElementById("askButton").addEventListener("click", askQuestion);


async function askQuestion() {
    const questionInput = document.getElementById("questionInput").value;

    // Call the GPT-3.5 Turbo API with the user's question
    const response = await fetchGPTResponse(questionInput);

    // Extract and display the response content
    const output = response.choices[0].message.content;
    document.getElementById("response").innerHTML = output;
}


async function fetchGPTResponse(question) {
    const apiKey = 'sk-fgidre565r7fyhfye654rtfgfjhgfhhfjdgjh';  // Replace with your actual OpenAI API key

    const apiUrl = 'https://api.openai.com/v1/chat/completions';

    const data = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: question },
        ],
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
    });

    return await response.json();
}
