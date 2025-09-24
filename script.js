
/* ==========================
   Smooth Scrolling
========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ==========================
   Project Filter Feature
========================== */
// Example: Add categories as data attributes in HTML <article data-category="web">
function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");
  projects.forEach(project => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
// Example usage: filterProjects("web");

/* ==========================
   Lightbox Effect for Project Images
========================== */
const images = document.querySelectorAll("#projects img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    const lightboxImg = document.createElement("img");
    lightboxImg.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(lightboxImg);
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

/* ==========================
   Contact Form Validation
========================== */
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  // Reset previous error styles
  [name, email, message].forEach(input => {
    input.style.borderColor = "#ccc";
  });

  if (name.value.trim() === "") {
    valid = false;
    name.style.borderColor = "red";
  }
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    valid = false;
    email.style.borderColor = "red";
  }
  if (message.value.trim() === "") {
    valid = false;
    message.style.borderColor = "red";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  } else {
    alert("Please fill in all fields correctly.");
  }
});
