/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Arya Kavar
 *      Student ID: 167240217
 *      Date: 27/11/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;
let items = document.querySelector(".products");
let navigationBar = document.querySelector("#category-menu");

function main() {
  document.getElementById("category").textContent = "Men";
  showList(
    products.filter(function (product) {
      if (product.categories.includes("c1")) {
        return product;
      }
    })
  );

  showNav();

  function createCard(product) {
    return `<article class="card">
    <img src="${product.imagePath}" alt="Product-Image">
    <div class="card-info">
    <header>
      <h4>${product.name}</h4>
      <p class="card-text">${product.description}</p>
      <h4 class="price">CAD${product.price}</h4>
    </header>
    </div>
  </article>`;
  }

  function showList(item) {
    let showProduct = item.map(function (product) {
      return createCard(product);
    });

    showProduct = showProduct.join("");
    items.innerHTML = showProduct;
  }

  function showNav() {
    const showCategory = categories
      .map(function (item) {
        return `<button data-id="${item.name}" class="btn" type="button">${item.name}</button>`;
      })
      .join("");

    navigationBar.innerHTML = showCategory;
    let clickBtn = document.querySelectorAll(".btn");

    clickBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let category = e.currentTarget.dataset.id;
        document.getElementById("category").textContent = e.currentTarget.dataset.id;

        if (category === "Men") {
          category = "c1";
        } else if (category === "Women") {
          category = "c2";
        } else if (category === "Children") {
          category = "c3";
        } else if (category === "NewBorn") {
          category = "c4";
        }

        const productCategory = products.filter(function (item) {
          if (item.categories.includes(category)) {
            return item;
          }
        });

        showList(productCategory);
      });
    });
  }
}

addEventListener("DOMContentLoaded", main);
