//https://pfogsqjlotyarvbvouyx.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2dzcWpsb3R5YXJ2YnZvdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTI5NzEsImV4cCI6MjAyMzQyODk3MX0.Yc27HF3kmp42TewwxA_rG97QV8wwUTqcW-_RmrmauMs

fetch("https://pfogsqjlotyarvbvouyx.supabase.co/rest/v1/svampe?order=title", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb2dzcWpsb3R5YXJ2YnZvdXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NTI5NzEsImV4cCI6MjAyMzQyODk3MX0.Yc27HF3kmp42TewwxA_rG97QV8wwUTqcW-_RmrmauMs",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //lopper og kalder showItem
  items.forEach(showItem);
}

function showItem(item) {
  //fang template
  const asArray = item.saeson.split(",");
  console.log(asArray);
  asArray.forEach((month) => {
    const template = document.querySelector("template").content;

    //lav kopi
    const copy = template.cloneNode(true);

    //ændre indhold
    copy.querySelector("img").src = item.image;

    copy.querySelector("p").textContent = item.title;

    copy.querySelector(".link").setAttribute("href", `svamp.html?id=${item.id}`);

    //appende
    document.querySelector(`#${month} .indhold`).appendChild(copy);
  });
}
