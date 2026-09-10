// =========================================
// NOVA FITNESS — INTERACTIONS
// VERACELABS TEMPLATE
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       PAGE LOADER
    ===================================== */

    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });


    /* =====================================
       STICKY HEADER
    ===================================== */

    const header = document.querySelector(".site-header");

    function updateHeader() {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateHeader);
    updateHeader();


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("open");
            mobileMenu.classList.toggle("open");
            document.body.classList.toggle("menu-open");

        });


        const mobileLinks = mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("open");
                mobileMenu.classList.remove("open");
                document.body.classList.remove("menu-open");

            });

        });

    }


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal-on-scroll");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================
       ANIMATED COUNTERS
    ===================================== */

    const counters =
        document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(
                    counter.getAttribute("data-target")
                );

                let current = 0;

                const duration = 1600;
                const startTime = performance.now();

                function updateCounter(currentTime) {

                    const progress =
                        Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                    const easedProgress =
                        1 - Math.pow(1 - progress, 3);

                    current =
                        Math.floor(target * easedProgress);

                    counter.textContent =
                        current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent =
                            target.toLocaleString();
                    }
                }

                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.5
        }
    );


    counters.forEach(counter => {
        counterObserver.observe(counter);
    });


    /* =====================================
       FAQ ACCORDION
    ===================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isOpen =
                item.classList.contains("open");


            // Close all other questions
            faqItems.forEach(otherItem => {

                if (otherItem !== item) {
                    otherItem.classList.remove("open");
                }

            });


            // Toggle current question
            if (isOpen) {
                item.classList.remove("open");
            } else {
                item.classList.add("open");
            }

        });

    });


    /* =====================================
       BACK TO TOP
    ===================================== */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================
       BUTTON RIPPLE EFFECT
    ===================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", function(event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("button-ripple");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(rect.width, rect.height);

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =====================================
       PARALLAX HERO
    ===================================== */

    const hero =
        document.querySelector(".hero");

    if (hero && window.innerWidth > 900) {

        window.addEventListener("scroll", () => {

            const scrollPosition =
                window.scrollY;

            if (scrollPosition < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center ${50 + scrollPosition * 0.025}%`;

            }

        });

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});