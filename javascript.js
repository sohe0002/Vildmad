//Når forms er udfyld og man klikker på knappen ryddes forms
document.getElementById("contactButton").addEventListener("click", function () {
  document.querySelector(".myForm").reset();
});
