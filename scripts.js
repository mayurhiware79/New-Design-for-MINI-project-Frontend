// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(44, 62, 80, 0.95)";
    navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Language selector
document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById("language-button");
  const languageDropdown = document.querySelector(".language-dropdown");
  const languageOptions = document.querySelectorAll(".language-dropdown li");

  // Toggle dropdown
  languageButton.addEventListener("click", (e) => {
    e.stopPropagation();
    languageDropdown.style.display =
      languageDropdown.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    languageDropdown.style.display = "none";
  });

  // Language selection
  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const language = option.textContent;
      localStorage.setItem("selectedLanguage", language);
      languageButton.querySelector("span").textContent = language;
      languageDropdown.style.display = "none";
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      document.querySelector(".nav-links").classList.remove("active");
    }
  });
});
