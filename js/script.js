// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the user clicks the button
scrollToTopBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form submission handling
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name && email && phone) {
      try {
        const formData = new FormData(this);
        const response = await fetch("php/contact_form.php", {
          method: "POST",
          body: formData,
        });
        const result = await response.text();
        console.log(result); // Log the response from the PHP script for debugging
        alert("Thank you for your message!");
        this.reset();
      } catch (error) {
        console.error("Error submitting the form: ", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill out all required fields.");
    }
  });

// For smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for revealing elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// Toggle the navigation menu on small screens
document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show-menu");
});
