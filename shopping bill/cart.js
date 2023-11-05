let cartitems = [{
    id: "one",
    name: "tomato",
    price: 40,
    gst: "2.40",
    img: "./images/pexels-pixabay-533280.jpg"
},
{
    id: "two",
    name: "carrot",
    price: 30,
    gst: "1.70",
    img: "./images/carrotseeds_800x.webp"
},
{
    id: "three",
    name: "egg",
    price: 5,
    gst: "0.2",
    img: "./images/pexels-pixabay-162712.jpg"
},
{
    id: "four",
    name: "brinjal",
    price: 35,
    gst: "2.0",
    img: "./images/360_F_246889147_5uZ4KWxKYPtFlPVHDJcrgwtHQ5UAJfkF.jpg"
},
{
    id: "five",
    name: "banana",
    price: 10,
    gst: "0.0",
    img: "./images/banana-bunch-19074568.webp"
},
{
    id: "six",
    name: "spinach",
    price: 25,
    gst: "2.0",
    img: "./images/images.jpeg"
}];
let total = 0;
let cart_table = document.getElementById("cart-table");
console.log("cart-table", cart_table);
let basket = JSON.parse(localStorage.getItem("data")) || [];
let cartitem = () => {
    (cart_table.innerHTML = cartitems.map((item) => {
        let { id, name, price, gst, img } = item;
        let search = basket.find((i) => i.id === id) || [];
        console.log("obj", item);
        console.log(id, img, name, price, gst);
        console.log("search initially", search.item);
        return `
        <div class="shopping-price">
        <div class="image-details" id="image-details">
        <img width = "300px" height="200px" src ="${img}">
        </div>
        <div class="name" id="name">${name}
        </div>
        <div class="price-details" id="price-details">
        <p>${price}</p>
        </div>
        <div class="minus-details" id="minus-details">
        <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
        </div>
        <div class="quantity" id=('${id}')>${search.item === undefined ? 0 : search.item}
        </div>
        <div class="plus-details" id="plus-details">
        <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
        </div>
        </div>
        `
    }).join(""))
};

{/* <div><button onclick=decrement('${id}')>Remove</div> */ }
{/* <div><button onclick="increment('${id}')">Add</button></div> */ }
cartitem();

function increment(id) {
    let selectedItem = id;
    console.log("selected Item", selectedItem.id);
    let search = basket.find((i) => i.id === selectedItem.id);
    // let item = cartitems.find((x) => x.id === x);
    console.log("search i", search);
    if (search === undefined) {
        basket.push({
            id: selectedItem, item: 1
        })
        // console.log("basket",basket);
    }
    else {
        search.item += 1;
    }
    // console.log(basket)
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem.id);
};

function decrement(id) {
    let selectedItem = id;
    console.log("selected Item", selectedItem);
    let search = basket.find((i) => i.id == selectedItem);
    console.log("search d", search);
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem.id);
}
function update(id){
    console.log("basket", basket);
    console.log(id);
    let search = basket.find((x) => { x.id === id; console.log("id", id, "===>", x.id); });
    if (search === undefined) return;
    // console.log("search",search);
    let cartAmount = document.getElementById(id);
    
    cartAmount.innerText = search?.item;
    console.log("updated item", cartAmount.innerText);
    calculation();
};
calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();