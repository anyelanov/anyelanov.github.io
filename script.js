const audio = document.querySelector('o'); // Selecciona correctamente el elemento <audio>

// Establece la fuente del audio
audio.src = "https://www.bensound.com/bensound-music/bensound-birthday.mp3";

// Evento cuando el audio se reproduce
audio.addEventListener('play', () => {
  document.body.classList.add('play-music'); // Añade la clase 'play-music' al <body>
});

// Evento cuando el audio se pausa
audio.addEventListener('pause', () => {
  document.body.classList.remove('play-music'); // Elimina la clase 'play-music' del <body>
});