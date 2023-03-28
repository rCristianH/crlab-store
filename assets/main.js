const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");

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

const productList = [];
productList.push({
  name: "Bike",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Screen",
  price: "320",
  image:
    "https://www.sercoplus.com/32251-large_default/monitor-samsung-ls22a33anhlxpe-22-va.jpg",
});
productList.push({
  name: "M10 3rd Gen",
  price: "979",
  image:
    "https://panamericana.vtexassets.com/arquivos/ids/482252-800-auto?v=638122637662200000&width=800&height=auto&aspect=true",
});
productList.push({
  name: "Bike",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Screen",
  price: "320",
  image:
    "https://www.sercoplus.com/32251-large_default/monitor-samsung-ls22a33anhlxpe-22-va.jpg",
});
productList.push({
  name: "M10 3rd Gen",
  price: "979",
  image:
    "https://panamericana.vtexassets.com/arquivos/ids/482252-800-auto?v=638122637662200000&width=800&height=auto&aspect=true",
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = `\$ ${product.price}`;
    const productName = document.createElement("p");
    productName.innerText = `${product.name}`;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productIconCart = document.createElement("img");
    productIconCart.setAttribute("src", "../icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productIconCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)