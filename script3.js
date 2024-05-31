document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('myAudio');
    audioElement.play().catch(error => {
      console.error('Automatisch afspelen mislukt:', error);
    });
  });
  