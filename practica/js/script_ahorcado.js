let word = "";
let attempts = 6;
let guessedLetters = [];
const wordDisplay = document.getElementById("word-display");
const attemptsDisplay = document.getElementById("attempts");
const letterInput = document.getElementById("letter-input");
const messageDisplay = document.getElementById("message");

// Llamada a la API para obtener una palabra aleatoria
async function fetchWord() {
  try {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=1");
    const data = await response.json();
    word = data[0].toLowerCase(); // Guardamos la palabra en minúsculas
    displayWord();
  } catch (error) {
    console.error("Error al obtener la palabra:", error);
    messageDisplay.textContent = "Hubo un problema con la conexión a la API.";
  }
}

// Muestra la palabra con las letras adivinadas
function displayWord() {
  let display = "";
  for (let i = 0; i < word.length; i++) {
    if (guessedLetters.includes(word[i])) {
      display += word[i] + " ";
    } else {
      display += "_ ";
    }
  }
  wordDisplay.textContent = display.trim();
}

// Comprobar la letra introducida
function checkLetter() {
  const letter = letterInput.value.toLowerCase();
  letterInput.value = ""; // Limpiar el campo de entrada

  if (!letter || guessedLetters.includes(letter)) {
    messageDisplay.textContent = "Por favor, introduce una letra nueva.";
    return;
  }

  guessedLetters.push(letter);

  if (word.includes(letter)) {
    messageDisplay.textContent = "¡Correcto!";
  } else {
    attempts--;
    attemptsDisplay.textContent = attempts;
    messageDisplay.textContent = "Incorrecto!";
  }

  if (attempts === 0) {
    messageDisplay.textContent = "¡Has perdido! La palabra era: " + word;
    letterInput.disabled = true;
  } else if (!wordDisplay.textContent.includes("_")) {
    messageDisplay.textContent = "¡Felicidades! Has adivinado la palabra.";
    letterInput.disabled = true;
  }

  displayWord();
}

// Iniciar el juego
fetchWord();
