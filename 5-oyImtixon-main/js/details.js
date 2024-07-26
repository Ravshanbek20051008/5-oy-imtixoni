const image = document.querySelector("#image");
const name = document.querySelector("#name");
const newprise = document.querySelector("#newprise");
const oldprise = document.querySelector("#oldprise");
const loader = document.querySelector("#loader");
const wrapper = document.querySelector("#wrapper");

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
          newprise.innerHTML = data.newPrice;
          oldprise.innerHTML = data.oldPrice;
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
