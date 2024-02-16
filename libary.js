document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const navbarLinks = document.querySelectorAll("#months a");

  function changeNavOnScroll() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      // Adjust based on your navbar height
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navbarLinks.forEach((link) => link.classList.remove("active"));
        navbarLinks[index].classList.add("active");

        // Find overskrifter med ID'er inden for den aktive sektion og tilføj klasse "active"
        const headings = section.querySelectorAll(".streg_flex"); // Justér efter behov

        headings.forEach((heading) => heading.classList.add("active"));

        //let sticks = document.querySelectorAll("section"); // Justér efter behov'
        //console.log("sticks er: ", sticks);
        //sticks.forEach((stick) => stick.classList.add("hold"));
      } else {
        //    console.log(fed h2);
        // Fjern klasse "active" fra overskrifter i andre sektioner
        const headings = section.querySelectorAll(".streg_flex"); // Justér efter behov
        headings.forEach((heading) => heading.classList.remove("active"));
        const stick = section.querySelectorAll("indhold_c"); // Justér efter behov
        headings.forEach((stick) => stick.classList.remove("hold"));
      }
    });
  }

  window.addEventListener("scroll", changeNavOnScroll);
});
