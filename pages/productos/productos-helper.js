const selectedProductContainer = document.querySelector(".selected-product");
const selectedProductInfo = document.querySelector(".product-info");
const productListItems = Array.from(
  document.querySelectorAll(".product-list-item")
);

console.log(selectedProductContainer, selectedProductInfo, productListItems);

function fillData(product) {
  const productImg = document.querySelector(".product-image");
  const productTitle = document.querySelector(".product-title");
  const productDescriptionOne = document.getElementById("product-description1");
  const productDescriptionTwo = document.getElementById("product-description2");
  const productPrice = document.getElementById("product-price");

  productImg.src = "../../imgs/" + product.imagen;
  productTitle.innerHTML = product.nombre;
  productDescriptionOne.innerHTML = product.descripcion1;
  productDescriptionTwo.innerHTML = product.descripcion2;
  productPrice.innerHTML = product.precio;
}

function selectProduct(e) {
  const productClicked = productos.find(
    (product) => product.nombre === e.target.dataset.nombre
  );
  fillData(productClicked);
  console.log(productClicked);
}

productListItems.forEach((item) =>
  item.addEventListener("click", selectProduct)
);
