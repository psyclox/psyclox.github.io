document.addEventListener("mousemove", (e) => {
    const cursorEffect = document.body;
    cursorEffect.style.setProperty("--x", `${e.clientX}px`);
    cursorEffect.style.setProperty("--y", `${e.clientY}px`);
});

document.querySelector(".learn-more").addEventListener("click", () => {
    alert("More features and enhancements are coming soon!");
});
