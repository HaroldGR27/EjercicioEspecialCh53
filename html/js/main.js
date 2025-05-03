const btnLoad = document.getElementById("btnLoad");
const prods = document.getElementById("prods");
const api = "https://api.escuelajs.co/api/v1/products";

function getData() {
    fetch(api)
        .then((response) => response.json())
        .then((res) => {
                llenarCards(res);
            })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",`
                <div class="alert alert-danger" role="alert">
                 ${err.message}
            </div>`);
        })
    }

btnLoad.addEventListener("click", function (event) {
    event.preventDefault();
    getData();
});

function llenarCards(prod) {
    prods.innerHTML="";
    for (let i = 0; i < Math.min(9, prod.length); i++) {
        prods.insertAdjacentHTML("beforeend",`
        <div class="col">
          <div class="card shadow-sm">
            <img src="${prod[i].images[1]}" referrerpolicy="no-referrer" class="card-img-top" width="100%" height="225" alt="${prod[i].title}">
            <div class="card-body">
              <p class="card-text">${prod[i].title}</p>
              <p class="card-text">${prod[i].description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$${prod[i].price}</small>
              </div>
            </div>
          </div>
        </div>`);
    } 
}