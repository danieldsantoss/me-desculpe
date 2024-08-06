// Função para alternar a visibilidade das opções de resposta
function toggleOptions(position) {
    const options = document.querySelector(`.${position}-options`);
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

// Função para exibir a mensagem
function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');
    messageText.textContent = message;
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000); // Esconde a mensagem após 3 segundos
}

// Função para lidar com a resposta
function handleResponse(message, showHearts) {
    showMessage(message);
    if (showHearts) {
        createHearts();
    }
}

// Função para criar corações na tela
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = ''; // Limpa corações existentes

    for (let i = 0; i < 100; i++) { // Número de corações
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória entre 3s e 5s
        heartsContainer.appendChild(heart);
    }
}
