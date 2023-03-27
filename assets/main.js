const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toogleDesktopMenu)

function toogleDesktopMenu(){
    console.log("toogle")
    desktopMenu.classList.toggle('inactive')
}