console.log("Welcome to My Portfolio!");

alert("Welcome to My Portfolio Website!");
// Dark and Light Mode Toggle

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.innerHTML = "🌙 Dark Mode";
    } else {
        themeButton.innerHTML = "☀️ Light Mode";
    }

});// Mobile Navigation Menu

const menuButton = document.getElementById("menu-toggle");
const navigation = document.querySelector(".navbar nav");

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("active");
});// Scroll Animations

const hiddenSections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
        }

    });

});

hiddenSections.forEach((section) => {
    section.classList.add("hidden-section");
    observer.observe(section);
});// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "#ff6b6b";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "#ff6b6b";
            return;
        }

        formMessage.textContent = "Thank you! Your message is ready.";
        formMessage.style.color = "#4ade80";
        contactForm.reset();
    });
}
