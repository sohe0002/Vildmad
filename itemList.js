//https://pfogsqjlotyarvbvouyx.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2dzcWpsb3R5YXJ2YnZvdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTI5NzEsImV4cCI6MjAyMzQyODk3MX0.Yc27HF3kmp42TewwxA_rG97QV8wwUTqcW-_RmrmauMs

fetch("https://pfogsqjlotyarvbvouyx.supabase.co/rest/v1/svampe?order=title", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2dzcWpsb3R5YXJ2YnZvdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTI5NzEsImV4cCI6MjAyMzQyODk3MX0.Yc27HF3kmp42TewwxA_rG97QV8wwUTqcW-_RmrmauMs",
  },
})
  // Når svaret modtages fra fetch-anmodningen, omdannes det til JSON-format.
  // Derefter kaldes showData-funktionen med de modtagne data.
  .then((res) => res.json())
  .then(showData);

// Denne funktion tager et array af elementer som argument og logger det til konsollen.
function showData(items) {
  console.log(items);
  //looper og kalder showItem
  items.forEach(showItem);
}

function showItem(item) {
  // Split 'saeson' feltet til en række måneder.
  const asArray = item.saeson.split(",");
  console.log(asArray);

  // For hver måned oprettes dynamisk HTML-indhold.
  asArray.forEach((month) => {
    const template = document.querySelector("template").content;

    //lav kopi
    const copy = template.cloneNode(true);

    // Ændre indholdet af den klonede HTML.
    copy.querySelector("img").src = item.image;
    copy.querySelector("p").textContent = item.title;
    copy
      .querySelector(".link")
      .setAttribute("href", `svamp.html?id=${item.id}`);

    // Tilføj den klonede HTML til passende månedens sektion.
    //appende
    document.querySelector(`#${month} .indhold`).appendChild(copy);
  });
}
