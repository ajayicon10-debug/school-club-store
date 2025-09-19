// Dynamically load nav.html and footer.html
document.addEventListener("DOMContentLoaded", () => {
  const navPlaceholder = document.getElementById("nav-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  // Load Navbar
  if (navPlaceholder) {
    fetch("nav.html")
      .then(res => res.text())
      .then(data => {
        navPlaceholder.innerHTML = data;

        // Add menu toggle functionality after nav is loaded
        const toggle = navPlaceholder.querySelector("#menu-toggle");
        const links = navPlaceholder.querySelector("#nav-links");

        if (toggle && links) {
          toggle.addEventListener("click", () => {
            links.classList.toggle("active");
          });
        }
      })
      .catch(err => console.error("Failed to load nav:", err));
  }

  // Load Footer
  if (footerPlaceholder) {
    fetch("footer.html")
      .then(res => res.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error("Failed to load footer:", err));
  }
}); 
