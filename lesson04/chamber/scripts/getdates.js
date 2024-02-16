const currentDateSpan = document.querySelector("#lastModified");
document.getElementById("year").innerHTML = new Date().getFullYear();
const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);