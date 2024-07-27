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
//         <h3>${product.name}</h3>
//         <h3 class="padarok">
//           + Подарок: <span>“Приложение к замкам Golden Service”</span>
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
//         <div class="trash">
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
//   }
// });

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
        <h3>${product.name}</h3>
        <h3 class="padarok">
          + Подарок: <span>“Приложение к замкам Golden Service”</span>
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
        <div class="trash">
          <img src="../img/trash.png" alt="" />
          <h3>Удалить</h3>
        </div>
        <h3 class="trash-h3">$${product.newPrice}</h3>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  let datacard = getDatafromcard();
  if (datacard.length) {
    datacard.forEach(function (product) {
      let card = createCard(product);
      hero.innerHTML += card;
    });
  }
});
