const btnLoad = document.getElementById("btnLoad");
const prods = document.getElementById("prods")
const api = "https://api.escuelajs.co/api/v1/products";

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();

    fetch(api)
        .then((response) => {
            console.log(response)
            response.json().then(() => {
                llenarCards(res)
            })
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                 ${err.message}
            </div>`);
        })
});

function llenarCards(prods) {
    prods.innerHTML="";
    let i = 0
    do{
        prods.insertAdjacentHTML("beforeend",
        `
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$ price</small>
              </div>
            </div>
          </div>
        </div>`);
        i++
    } while (i <= 9);
}