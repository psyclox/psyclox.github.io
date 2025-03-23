// Cursor Effect
document.addEventListener("mousemove", (e) => {
    const cursorEffect = document.querySelector(".cursor-effect");
    cursorEffect.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Typewriter Effect for Title
const text = "🔐 Cloud Crypt";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Fade-in Effect
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
});

// Password Strength Checker
document.getElementById("passwordInput").addEventListener("input", function () {
    const strengthBar = document.getElementById("passwordStrengthBar");
    const strengthText = document.getElementById("strengthText");
    const strength = this.value.length;

    strengthBar.style.width = `${strength * 10}%`;
    strengthText.innerText = strength > 8 ? "Strong 🔥" : "Weak ⚠️";
});
