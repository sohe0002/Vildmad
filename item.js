const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://pfogsqjlotyarvbvouyx.supabase.co/rest/v1/svampe?id=eq." + id, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2dzcWpsb3R5YXJ2YnZvdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTI5NzEsImV4cCI6MjAyMzQyODk3MX0.Yc27HF3kmp42TewwxA_rG97QV8wwUTqcW-_RmrmauMs",
  },
})
  .then((res) => res.json())
  .then((data) => showItem(data));

function showItem(item) {
  //console.table(item);

  //Vælger først item, da Supabase laver alt til et Array
  const data = item[0];

  //tilføj indhold
  document.querySelector(".img_svamp").src = data.image;
  document.querySelector(".navn_svamp").textContent = data.title;
  document.querySelector(".description .beskrivelse").textContent = data.beskrivelse;
  document.querySelector(".description .intro_beskrivelse").textContent = data.intro;
  document.querySelector(".sankested_sted").textContent = data.sankested_sted;
  document.querySelector(".sankested_tekst").textContent = data.sankested_tekst;
  document.querySelector(".foraging p").textContent = data.sankning;
  document.querySelector(".season").textContent = data.saeson.replaceAll(",", " / ");
  document.querySelector(".season_p").textContent = data.saeson_tekst;
}
