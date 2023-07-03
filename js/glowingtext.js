var glowingText = document.getElementById("glowing-text");

glowingText.addEventListener("mouseover", function() {
    glowingText.classList.add("glow");
});

glowingText.addEventListener("mouseout", function() {
    glowingText.classList.remove("glow");
});



setInterval(function () {
    glowingText.classList.add("glow")
    setTimeout(function () {
        glowingText.classList.remove("glow");
    }, 3000);
  }, 15000); // Создаем новую частицу каждую секунду (60 кадров в секунду)