const url = "https://67767e6812a55a9a7d0be93c.mockapi.io/Labubu";
const user = JSON.parse(localStorage.getItem("user"));
const helloUser = document.getElementById("helloUser");

if(user){
    helloUser.innerHTML = `
    <div class="d-flex align-items-center tenuser">
    <i class="fa-solid fa-hand-holding-heart"></i>
    <h5>${user.username}</h5>
    </div>
    `;
} else{
    helloUser.innerHTML = `Hello Guest`;
}

console.log(user);
console.log(user.username);
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
}
function showProduct(products) {
    const showData = document.getElementById("showData");
    for(let i = 0; i < products.length; i++){
        console.log(products[i].title);
        showData.innerHTML += `
            <div class="card mt-5" style="width: 18rem;">
    <img src="${products[i].Image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${products[i].Name}</h5>
            <p class="card-text">${products[i].Price}</p>
            <button class="btn btn-secondary nutmua" onclick="addToCart(${products[i].id})">Add to Cart</button>
        </div>
    </div>
        `
    }
}

getData();