// hamburger

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.getElementById("navItemCont").classList.toggle("activeNav");
});

document.querySelectorAll(".navbarLink").forEach((navlink) => {
  navlink.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("active");
    document.getElementById("navItemCont").classList.toggle("activeNav");
  });
});

// show navbar only when the page is scrolled down by 50px;

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Add animation
          observer.unobserve(entry.target); // Stop observing to prevent re-triggering
        }
      });
    },
    { threshold: 0.4 }
  ); // Trigger when 40% of the element is visible

  elements.forEach((el) => observer.observe(el));
});
