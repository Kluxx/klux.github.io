// JavaScript code to set the background image

const imageFile = 'images/image.jpg'; // Update this with your own image file path

window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.style.backgroundImage = `url('${imageFile}')`;
});