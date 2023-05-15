const toggleChatButton = document.getElementById('toggle-chat');
const chatWindow = document.getElementById('chat-window');
const chatResponse = document.getElementById('chat-response');

toggleChatButton.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message !== '') {
        // Вивести повідомлення про формулювання відповіді
        chatResponse.innerHTML += '<p>Очікуйте, відповідь формулюється...</p>';

        // Виконати запит до ChatGPT та отримати відповідь
        const apiKey = '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';
        const apiUrl = 'https://api.openai.com/v1/chat/completions';

        const data = {
            'model': 'gpt-3.5-turbo',
            'messages': [{
                'role': 'system',
                'content': 'Ти досвічений інвестор зі стажем 7 років.'
            }, {
                'role': 'user',
                'content': message
            }],
            'temperature': 0.7
        };

        fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                if (result.choices && result.choices.length > 0) {
                    const generatedResponse = result.choices[0].message.content.trim();

                    // Відображення відповіді
                    chatResponse.innerHTML += `<p><strong>Ви:</strong> ${message}</p>`;
                    chatResponse.innerHTML += `<p><strong>ChatGPT:</strong> ${generatedResponse}</p>`;
                } else {
                    // Помилка: відповідь не отримана
                    chatResponse.innerHTML += '<p>Сталася помилка під час отримання відповіді.</p>';
                }
            })
            .catch(error => {
                // Помилка запиту до API
                chatResponse.innerHTML += '<p>Сталася помилка під час виконання запиту.</p>';
                console.error('Помилка:', error);
            });
        input.value = '';
    }
}

function closeChat() {
    chatWindow.style.display = 'none';
}