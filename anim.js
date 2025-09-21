// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  
  { text: "¿Por qué aparecen los pájaros de repente", time: 8 },
  { text: "Cada vez que estás cerca?", time: 14 },
  { text: "Como yo, anhelan estar", time: 20 },
  { text: "Cerca de ti", time: 23 },
  { text: "¿Por qué las estrellas caen del cielo", time: 30 },
  { text: "Cada vez que pasas?", time: 35 },
  { text: "Al igual que yo, anhelan estar", time: 42},
  { text: "Cerca de ti", time: 46 },
  { text: "El día que naciste", time: 50 },
  { text: "Los ángeles se juntaron", time: 53 },
  { text: "Y decidieron crear un sueño hecho realidad", time: 57 },
  { text: "Entonces rociaron polvo lunar en tu cabello dorado", time: 61 },
  { text: "Y la luz de las estrellas en tus ojos azules", time: 65 },
  { text: "Por eso todos los chicos de la ciudad", time: 73 },
  { text: "Te siguen, a tu alrededor", time:  79 },
  { text: "Como yo, anhelan estar", time: 85 },
  { text: "Cerca de ti", time: 89 },

  { text: "Melissa de mi corazon", time: 93 },
  { text: "Te quiero mucho", time: 96 },
  { text: "Te ganaste muchooos besos JASJ", time:  99 },
  { text: "Me gustas", time: 105 },
  { text: "I MISS YOU <3", time: 108 },
  { text: "FIN DEL MENSAJE, I LOVE YOU", time: 112 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);