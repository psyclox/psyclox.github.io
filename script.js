document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const cards = document.querySelectorAll(".card");
    const steps = document.querySelectorAll(".step");

    // Mousemove Effect on Hero Section
    hero.addEventListener("mousemove", (e) => {
        let moveX = (e.clientX / window.innerWidth) * 40 - 20;
        let moveY = (e.clientY / window.innerHeight) * 40 - 20;

        hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Card Hover Animation (Moves in Cursor Direction)
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            let moveX = (e.clientX / window.innerWidth) * 10 - 5;
            let moveY = (e.clientY / window.innerHeight) * 10 - 5;

            card.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            card.style.boxShadow = "0 12px 30px rgba(255, 255, 255, 0.3)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translate(0, 0) scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });

    // Step Hover Effect (Rotates Slightly)
    steps.forEach(step => {
        step.addEventListener("mousemove", () => {
            step.style.transform = "rotate(-5deg) scale(1.1)";
        });

        step.addEventListener("mouseleave", () => {
            step.style.transform = "rotate(0) scale(1)";
        });
    });

    // Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
