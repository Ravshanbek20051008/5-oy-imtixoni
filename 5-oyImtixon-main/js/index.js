import { createCard } from "./function.js";
const wrapper = document.querySelector("#wrapper");
const loader = document.querySelector("#loader");

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
