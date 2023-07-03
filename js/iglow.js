window.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const glow = document.querySelector('.glow');
  
    container.addEventListener('mouseenter', function() {
      glow.classList.add('active');
    });
  
    container.addEventListener('mouseleave', function() {
      glow.classList.remove('active');
    });
  });