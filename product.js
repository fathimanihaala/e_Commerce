async function getallproducts() {
  var products = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });

  var data = await products.json();
  let studentlist = "";
  for (let p of data) {
    studentlist =
      studentlist +
      `
    <div class="card " style=" width:250px; height: auto">
      <img src="${p.image}" class="card-img-top" alt="..." style=" width:150px; height:100px;">
      <div class="card-body">
        <h5 class="card-title">${p.title} </h5>
        <p class="card-text" style="font-size:11px">${p.description}</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">${p.price}</small>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("products_space").innerHTML = studentlist;
}

getallproducts();
