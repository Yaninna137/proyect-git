const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarNumero() {
  const entrada = document.getElementById("entrada").value;
  const mensaje = document.getElementById("mensaje");

  if (!entrada) {
    mensaje.textContent = "Por favor ingresa un número.";
    return;
  }

  const numeroUsuario = parseInt(entrada);

  if (numeroUsuario === numeroSecreto) {
    mensaje.textContent = "🎉 ¡Correcto! Adivinaste el número.";
  } else if (numeroUsuario < numeroSecreto) {
    mensaje.textContent = "📉 Muy bajo. Intenta con un número más alto.";
  } else {
    mensaje.textContent = "📈 Muy alto. Intenta con un número más bajo.";
  }
}
