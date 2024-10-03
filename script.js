let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 7;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const resultDisplay = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart-button');

let userName = prompt("Por favor, digite seu nome:");

if (userName) {
    guessInput.placeholder = `Digite seu palpite, ${userName}`;
}

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (attempts <= maxAttempts) {
        if (userGuess === randomNumber) {
            resultDisplay.innerText = `Parabéns Acertou✔️👍🤝! Você adivinhou o número em ${attempts} tentativas!`;
            guessButton.disabled = true;
            restartButton.classList.remove('hidden');
        } else if (userGuess < randomNumber) {
            resultDisplay.innerText = "Muito baixo📉,digite número maior! Tente novamente.";
        } else {
            resultDisplay.innerText = "Muito alto📈, digite número menor! Tente novamente.";
        }
        attemptsDisplay.innerText = `Tentativas restantes: ${maxAttempts - attempts}`;
    } else {
        resultDisplay.innerText = `Você esgotou suas tentativas! O número era ${randomNumber}.`;
        guessButton.disabled = true;
        restartButton.classList.remove('hidden');
    }

    guessInput.value = '';
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultDisplay.innerText = '';
    attemptsDisplay.innerText = `Tentativas restantes: ${maxAttempts}`;
    guessButton.disabled = false;
    restartButton.classList.add('hidden');
    guessInput.value = '';
});

attemptsDisplay.innerText = `Tentativas restantes: ${maxAttempts}`;


const playAudioButton = document.getElementById('play-audio-button');
const backgroundAudio = document.getElementById('background-audio');

playAudioButton.addEventListener('click', () => {
    backgroundAudio.play();
});




