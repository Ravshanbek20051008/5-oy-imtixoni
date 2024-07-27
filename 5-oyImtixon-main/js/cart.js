// const hero = document.querySelector("#hero");

// function getDatafromcard() {
//   let data = [];
//   if (localStorage.getItem("cart")) {
//     data = JSON.parse(localStorage.getItem("cart"));
//   }
//   return data;
// }

// function createCard(product) {
//   return `
//     <div class="quti">
//       <div class="image">
//         <img src="${product.image}" alt="${product.name}" />
//       </div>
//       <div class="title">
//         <h3 class="titlename">${product.name}</h3>
//         <h3 class="padarok">
//           + Подарок: <span>“Приложение к замкам Golden”</span>
//         </h3>
//         <select id="selekt">
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>
//       </div>
//       <div class="ochirish">
//         <div class="trash" data-id="${product.id}">
//           <img src="../img/trash.png" alt="" />
//           <h3>Удалить</h3>
//         </div>
//         <h3 class="trash-h3">$${product.newPrice}</h3>
//       </div>
//     </div>
//   `;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let datacard = getDatafromcard();
//   if (datacard.length) {
//     datacard.forEach(function (product) {
//       let card = createCard(product);
//       hero.innerHTML += card;
//     });
//     const deletebuttons = document.querySelectorAll(".trash");
//     deletebuttons.forEach(function (delelte) {
//       delelte &&
//         delelte.addEventListener("click", function () {
//           let isdelelte = confirm("Rostdan ham o'chirmoqwchimisz");
//           let id = this.getAttribute("data-id");
//           if (isdelelte && id) {
//             this.parentNode.parentNode.remove();
//             datacard = datacard.filter(function (el) {
//               return el.id != id;
//             });
//             localStorage.setItem("cart", JSON.stringify(datacard));
//           }
//         });
//     });
//   }
// });
// hero elementini tanlash
const hero = document.querySelector("#hero");

function getDatafromcard() {
  let data = [];
  if (localStorage.getItem("cart")) {
    data = JSON.parse(localStorage.getItem("cart"));
  }
  return data;
}

function createCard(product) {
  return `
    <div class="quti">
      <div class="image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="title">
        <h3 class="titlename">${product.name}</h3>
        <h3 class="padarok">
          + Подарок: <span>“Приложение к замкам Golden”</span>
        </h3>
        <select id="selekt">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="ochirish">
        <div class="trash" data-id="${product.id}">
          <img src="../img/trash.png" alt="" />
          <h3>Удалить</h3>
        </div>
        <h3 class="trash-h3">$${product.newPrice}</h3>
      </div>
    </div>
  `;
}

function updateTotalPrice() {
  const prices = document.querySelectorAll(".trash-h3");
  let totalPrice = 0;

  prices.forEach((price) => {
    const priceValue = parseFloat(price.textContent.replace("$", ""));
    totalPrice += priceValue;
  });

  document.querySelector("#total-price").textContent = `$${totalPrice}`;
}

document.addEventListener("DOMContentLoaded", function () {
  let datacard = getDatafromcard();
  if (datacard.length) {
    datacard.forEach(function (product) {
      let card = createCard(product);
      hero.innerHTML += card;
    });

    const deletebuttons = document.querySelectorAll(".trash");
    deletebuttons.forEach(function (deleteButton) {
      deleteButton &&
        deleteButton.addEventListener("click", function () {
          let isDelete = confirm("Rostdan ham o'chirmoqchimisiz?");
          let id = this.getAttribute("data-id");
          if (isDelete && id) {
            this.parentNode.parentNode.remove();
            datacard = datacard.filter(function (el) {
              return el.id != id;
            });
            localStorage.setItem("cart", JSON.stringify(datacard));
            updateTotalPrice();
          }
        });
    });

    updateTotalPrice();
  }
});
