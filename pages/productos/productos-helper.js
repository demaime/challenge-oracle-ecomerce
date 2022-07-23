const selectedProductContainer = document.querySelector(".selected-product");
const selectedProductInfo = document.querySelector(".product-info");
const categoriesList = document.querySelector(".categories-list");
const categoryContainer = document.querySelector(".category-container");
const arrowContainer = document.getElementById("arrow-container");

fillListOfProducts();
const productListItems = Array.from(
  document.querySelectorAll(".product-list-item")
);

function fillProductData(product) {
  const productImg = document.querySelector(".product-image");
  const productTitle = document.querySelector(".product-title");
  const productDescriptionOne = document.getElementById("product-description1");
  const productDescriptionTwo = document.getElementById("product-description2");
  const productPrice = document.getElementById("product-price");
  const amountInput = document.querySelector(".amount-input");
  const buttonAddToCart = document.querySelector(".add-to-cart");
  const mensajeInicial = document.getElementById("mensaje-inicial");

  selectedProductContainer.style.opacity = 0;
  selectedProductInfo.style.opacity = 0;
  amountInput.value = "";

  setTimeout(() => {
    productImg.src = "../../imgs/" + product.imagen;
    productTitle.innerHTML = product.nombre.toUpperCase();
    productDescriptionOne.innerHTML = product.descripcion1;
    productDescriptionTwo.innerHTML = product.descripcion2;
    productPrice.innerHTML = "##" + product.precio;
    buttonAddToCart.disabled = false;
    mensajeInicial.style.opacity = 0;
  }, 350);
  6;
  setTimeout(() => {
    mensajeInicial.style.display = "none";
    selectedProductContainer.style.opacity = 1;
    selectedProductInfo.style.opacity = 1;
  }, 500);
}

function openCategoriesMenu() {
  categoriesList.classList.toggle("opened");
  categoriesList.classList.contains("opened")
    ? (arrowContainer.innerHTML = `<i class="fa-solid fa-circle-chevron-up"></i>`)
    : setTimeout(() => {
        arrowContainer.innerHTML = `<i class="fa-solid fa-circle-chevron-down"></i>`;
      }, 150);
}
function selectProduct(e) {
  const productClicked = productos.find(
    (product) => product.nombre === e.target.dataset.nombre
  );
  fillProductData(productClicked);
}

function fillListOfProducts() {
  const productList = document.querySelector(".products-list");
  const thisCategoryProducts = productos
    .filter((product) => product.categoria === "alfajores")
    .map((product) => product.nombre);

  thisCategoryProducts.forEach((product) => {
    const item = document.createElement("li");
    item.classList.add("product-list-item");
    item.dataset.nombre = product.toLowerCase();
    item.innerHTML = product.toUpperCase();
    productList.appendChild(item);
  });
}

categoryContainer.addEventListener("click", openCategoriesMenu);
productListItems.forEach((item) =>
  item.addEventListener("click", selectProduct)
);
