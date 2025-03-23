// Cursor Effect (Moves Background)
document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty('--mouseX', `${e.clientX}px`);
    document.body.style.setProperty('--mouseY', `${e.clientY}px`);
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

// Password Strength Checker
document.getElementById("passwordInput").addEventListener("input", function () {
    const strengthBar = document.getElementById("passwordStrengthBar");
    const strengthText = document.getElementById("strengthText");
    const password = this.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength === 1 || strength === 2) {
        strengthBar.style.backgroundColor = "red";
        strengthText.innerText = "Weak ❌";
    } else if (strength === 3) {
        strengthBar.style.backgroundColor = "orange";
        strengthText.innerText = "Medium ⚠️";
    } else if (strength >= 4) {
        strengthBar.style.backgroundColor = "green";
        strengthText.innerText = "Strong ✅";
    }
});
