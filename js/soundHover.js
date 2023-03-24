document.addEventListener('DOMContentLoaded', () => {
    const nasale = document.querySelector('#hover-nasale');
    const audio = new Audio('../audio/boing-nasale.wav');
    nasale.addEventListener('mouseover', () => {
      audio.play();
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    const math = document.querySelector('#hover-math');
    const audio = new Audio('../audio/boing-math.wav');
    math.addEventListener('mouseover', () => {
      audio.play();
    });
  });


