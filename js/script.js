// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Order Button Alert
const orderButtons = document.querySelectorAll(".food-card button");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Thank you! Your order has been placed.");
    });
});

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("📩 Thank you for contacting FoodExpress! We'll get back to you soon.");

        contactForm.reset();
    });
}