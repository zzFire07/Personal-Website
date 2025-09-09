const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const timeLabel = document.getElementById("time");

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸"; // cambia icono
  } else {
    audio.pause();
    playPauseBtn.textContent = "►";
  }
});

// Actualizar barra de progreso y tiempo
audio.addEventListener("timeupdate", () => {
  progress.max = Math.floor(audio.duration);
  progress.value = Math.floor(audio.currentTime);
  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) seconds = "0" + seconds;
  timeLabel.textContent = `${minutes}:${seconds}`;
});

// Mover la canción con el input
progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});
