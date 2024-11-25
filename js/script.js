// Función para generar un número aleatorio entre 1 y 3
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
  }
  
  // Función para iniciar el juego
  function iniciarJuego() {
    const numeroAleatorio = generarNumeroAleatorio();
    let countdown = 5;
    let interval;
  
    // Mostrar el contador regresivo
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = countdown;
  
    // Iniciar la cuenta atrás
    interval = setInterval(() => {
      countdown--;
      countdownElement.textContent = countdown;
  
      if (countdown === 0) {
        clearInterval(interval); // Detener la cuenta atrás cuando llegue a 0
        comprobarRespuesta(numeroAleatorio);
      }
    }, 1000);
  
    // Evento cuando el usuario ingresa un número
    const userInput = document.getElementById("userInput");
    userInput.addEventListener("input", () => {
      // Si el usuario ha escrito un número del 1 al 3
      if (userInput.value >= 1 && userInput.value <= 3) {
        userInput.disabled = true; // Deshabilitar el input mientras se espera la cuenta atrás
      }
    });
  
    // Mostrar el botón de reiniciar
    document.getElementById("restart").style.display = "none"; // Esconde el botón de reinicio al iniciar el juego
  }
  
  // Función para comprobar la respuesta del jugador
  function comprobarRespuesta(numeroAleatorio) {
    const userInput = document.getElementById("userInput");
    const resultElement = document.getElementById("result");
    const numeroElegido = parseInt(userInput.value);
  
    // Comparar números
    if (numeroElegido === numeroAleatorio) {
      resultElement.innerHTML = `
        <span class="green">¡Has salvado el mundo!</span><br>
        El número correcto era: ${numeroAleatorio}
      `;
    } else {
      resultElement.innerHTML = `
        <span class="red">La bomba ha estallado</span><br>
        El número correcto era: ${numeroAleatorio}
      `;
    }
  
    // Mostrar el botón para reiniciar el juego
    const restartButton = document.getElementById("restart");
    restartButton.style.display = "block"; // Mostrar el botón para reiniciar
    restartButton.addEventListener("click", reiniciarJuego);
  }
  
  // Función para reiniciar el juego
  function reiniciarJuego() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("userInput").disabled = false;
    document.getElementById("userInput").value = "";
    iniciarJuego();
  }
  
  // Iniciar el juego cuando se carga la página
  window.onload = iniciarJuego;
  