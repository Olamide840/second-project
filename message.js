const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.querySelector('.chat-messages'); 

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
        <p>${message}</p>
        <span>Just Now.</span><br>
        <span style="color: red;font-weight: 700;">Replies may be delayed because of ongoing Development.</span>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        messageInput.value = '';
    }
});