import { createCard, createCard2 } from "./function.js";
const wrapper = document.querySelector("#wrapper");
const wrapper1 = document.querySelector("#wrapper1");
const loader = document.querySelector("#loader");
const btn2 = document.querySelector("#btn2");
btn2 &&
  btn2.addEventListener("change", function () {
    fetch(
      `https://cars-pagination.onrender.com/products/category?category=${this.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        wrapper.innerHTML = "";
        data &
          data.forEach(function (page) {
            let card = createCard(page);
            wrapper.innerHTML += card;
          });
        let cards = document.querySelectorAll(".card");
        cards.length &&
          cards.forEach(function (card) {
            card.addEventListener("click", function () {
              let id = this.getAttribute("data-id");
              window.location.assign(
                `http://127.0.0.1:5500/5-oyImtixon-main/page/details.html?id=${id}`
              );
            });
          });
      });
  });
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/products")
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.length) {
        data.forEach(function (product) {
          let card = createCard(product);
          wrapper.innerHTML += card;
        });
      }
      if (data.length) {
        data.forEach(function (product) {
          let card = createCard2(product);
          wrapper1.innerHTML += card;
        });
      }
      let cards = document.querySelectorAll(".card");
      cards.length &&
        cards.forEach(function (card) {
          card.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            window.location.assign(
              `http://127.0.0.1:5500/5-oyImtixon-main/page/details.html?id=${id}`
            );
          });
        });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(function () {
      loader.remove();
    });
});
