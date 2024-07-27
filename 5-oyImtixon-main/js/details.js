const image = document.querySelector("#image");
const name = document.querySelector("#name");
const newprise = document.querySelector("#newprise");
const oldprise = document.querySelector("#oldprise");
const loader = document.querySelector("#loader");
const wrapper = document.querySelector("#wrapper");
const addtobag = document.querySelector("#add-to-bag");

function getDatafromcard() {
  let data = [];
  if (localStorage.getItem("cart")) {
    data = JSON.parse(localStorage.getItem("cart"));
  }
  return data;
}

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];
  console.log(id);
  if (id) {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (data.id) {
          image.setAttribute("src", data.image);
          name.innerHTML = data.name;
          newprise.innerHTML = "$" + data.newPrice;
          oldprise.innerHTML = "$" + data.oldPrice;

          addtobag.addEventListener("click", function (event) {
            event.preventDefault();
            let product = {
              id: data.id,
              name: data.name,
              newPrice: data.newPrice,
              image: data.image,
            };
            let datacard = getDatafromcard();
            let isexsit = datacard.find(function (el) {
              return el.id == data.id;
            });
            if (!isexsit) {
              datacard.push(product);
            }
            localStorage.setItem("cart", JSON.stringify(datacard));
            window.location.assign(
              "http://127.0.0.1:5500/5-oyImtixon-main/page/cart.html"
            );
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(function () {
        wrapper.style.display = "flex";
        loader.remove();
      });
  } else {
    window.location.assign("http://127.0.0.1:5500/5-oyImtixon-main/index.html");
  }
});
