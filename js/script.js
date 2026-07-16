document.addEventListener("DOMContentLoaded", () => {
    const particlesContainer = document.getElementById("particles");

    if (!particlesContainer) {
        return;
    }

    particlesContainer.innerHTML = "";

    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        const size = 2 + Math.random() * 3;

        particle.className = "particle";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${7 + Math.random() * 8}s`;
        particle.style.animationDelay = `${-Math.random() * 12}s`;

        particlesContainer.appendChild(particle);
    }
});

const productStage = document.getElementById("product-stage");
const heroProduct = document.getElementById("hero-product");

if (productStage && heroProduct) {
    productStage.addEventListener("mousemove", (event) => {
        const bounds = productStage.getBoundingClientRect();
        const mouseX = event.clientX - bounds.left;
        const mouseY = event.clientY - bounds.top;
        const percentX = mouseX / bounds.width - 0.5;
        const percentY = mouseY / bounds.height - 0.5;
        const rotateY = percentX * 12;
        const rotateX = percentY * -10;

        heroProduct.style.setProperty("--rotate-x", `${rotateX}deg`);
        heroProduct.style.setProperty("--rotate-y", `${rotateY}deg`);
    });

    productStage.addEventListener("mouseleave", () => {
        heroProduct.style.setProperty("--rotate-x", "0deg");
        heroProduct.style.setProperty("--rotate-y", "0deg");
    });
}
