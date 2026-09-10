// =========================
// IRONFIT — INTERACTIONS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth navigation
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    // Reveal animation
    const revealElements = document.querySelectorAll(
        ".about-card, .program-card, .trainer-card, .price-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

});