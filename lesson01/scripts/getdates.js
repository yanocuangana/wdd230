
document.getElementById("lastModified").innerHTML= new Date(document.lastModified);
document.getElementById("year").innerHTML = new Date().getFullYear();

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