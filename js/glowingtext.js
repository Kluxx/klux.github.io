var glowingText = document.getElementById("glowing-text");

glowingText.addEventListener("mouseover", function() {
    glowingText.classList.add("glow");
});

glowingText.addEventListener("mouseout", function() {
    glowingText.classList.remove("glow");
});