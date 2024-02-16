document.querySelector(".group");
const els = document.querySelectorAll("streg_flex");
for (let i = 0; i < 12; i++) {
  const g = document.querySelector("template").content;
  const c = g.cloneNode(true);
  c.querySelector("h2").innerText = months[i];
  c.querySelector("h2").dataset.month = months[i];
  document.querySelector(".groups").appendChild(c);
  const li = document.createElement("li");
  li.textContent = months[i];
  li.dataset.month = months[i];
  document.querySelector(".menu ol").appendChild(li);
}
els.forEach((el) => {
  const observer = new IntersectionObserver(
    ([e]) => {
      if (e.intersectionRatio < 1 && e.boundingClientRect.top < 0) {
        //active
        e.target.classList.add(".active");
        document
          .querySelector(`.menu ol [data-month=${e.target.dataset.month}]`)
          .classList.add(".active");
      } else {
        e.target.classList.remove(".active");
        document
          .querySelector(`.menu ol [data-month=${e.target.dataset.month}]`)
          .classList.remove(".active");
      }
    },
    { threshold: [1] }
  );

  observer.observe(el);
});
