const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail-shopping-cart");


//funciones de apoyo
function desktopMenuClosed() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
}
function mobileMenuClosed() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
}
function asideClosed() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
}
//funciones de apoyo



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
  asideClosed();
  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  asideClosed();
  mobileMenu.classList.toggle("inactive");
}
function toggleCartAside() {
  mobileMenuClosed();
  desktopMenuClosed();
  aside.classList.toggle("inactive");
}
