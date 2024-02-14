document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll("#months a");

  function changeNavOnScroll() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 50; // Adjust based on your navbar height
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navbarLinks.forEach((link) => link.classList.remove("active"));
        navbarLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", changeNavOnScroll);
});
