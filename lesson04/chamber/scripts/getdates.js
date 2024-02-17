const currentDateSpan = document.querySelector("#lastModified");
document.getElementById("year").innerHTML = new Date().getFullYear();
const now = new Date();
currentDateSpan.textContent = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "full",
}).format(now);

function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "favicon/close_white_36dp.svg";
  }
  else{
      menuMobile.classList.add('open')
      document.querySelector('.icon').src = "favicon/close_white_36dp.svg";
  }
}