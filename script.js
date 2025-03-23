// 📌 Cursor Effect (Follows Mouse)
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor-effect");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Move background blobs slightly based on cursor
    document.querySelectorAll(".blob").forEach(blob => {
        const speed = 10; // Adjust speed
        const x = (e.clientX - window.innerWidth / 2) / speed;
        const y = (e.clientY - window.innerHeight / 2) / speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// 📌 Password Strength Checker
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
