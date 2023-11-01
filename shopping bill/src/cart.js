let cartitems = [{
    id: "one",
    name: "tomato",
    price: 40,
    gst: "2.40",
    img: "shopping bill/images/tomatoes-1296x728-feature.jpg"
},
{
    id: "two",
    name: "carrot",
    price: 30,
    gst: "1.70",
    img: "shopping bill/images/download.jpeg"
},
{
    id: "three",
    name: "egg",
    price: 5,
    gst: "0.2",
    img: "shopping bill/images/_105482203__105172250_gettyimages-857294664.jpg"
},
{
    id: "four",
    name: "brinjal",
    price: 35,
    gst: "2.0",
    img: "../images/Solanum_melongena_24_08_2012_(1).jpeg"
},
{
    id: "five",
    name: "banana",
    price: 10,
    gst: "0.0",
    img: "../images/download.jpeg"
},
{
    id: "six",
    name: "carrot",
    price: 16,
    gst: "0.0",
    img: "../images/_105482203__105172250_gettyimages-857294664.jpg"
},
{
    id: "seven",
    name: "spinach",
    price: 25,
    gst: "2.0",
    img: "shopping bill/images/images.jpeg"
}];
let total = 0;
let basket = JSON.parse(localStorage.getItem("data")) || [];
cartitems.forEach((x) => {
    console.log(x.price);
    total += x.price;
})
console.log(total);
let shoppingCart = document.getElementById("price-table");
console.log(shoppingCart)
let cartitem = () => {
    (shoppingCart.innerHTML = cartitems.map((item) => {
        let { id, name, price, gst, img } = item;
        console.log("obj", item);
        console.log(id, img, name, price, gst);
        return `
      <div class = "price-table">
      <img width = "100" src ="../images/_105482203__105172250_gettyimages-857294664.jpg" alt =${img} >
      <p class=cart-name>${name}</p>
      <p>${price}</p>
      <div>
      <div><button onclick=decrement('${id}')>Remove</div>
      <div><button onclick="increment('${id}')">Add</button></div>
      </div>
      </div>
        `
    }).join(""))
};
totalprice = 0;

cartitem();

function increment(y) {
    let selectedItem = y;
    console.log(selectedItem);
    let search = basket.find((i) => i.id == selectedItem.id);
    // let item = cartitems.find((x) => x.id === x);
    console.log("search",search);
    if (search=== undefined) {
        
        basket.push({
            id: selectedItem.id, item: 1
        })
    }
    else{
        search.item+=1;
    }
    // console.log(basket)
    localStorage.setItem("data", JSON.stringify(basket));
}

function decrement(y){
    let selectedItem=y;
    console.log("selected Item",selectedItem);
    let search=basket.find((i)=>i.id==selectedItem.id);
    console.log("search",search)
    if(search===undefined) return;
    else if(search.item===0) return;
    else{
        search.item-=1;
    }
    localStorage.setItem("data",JSON.stringify(basket));
}
// let generatecartitems = document.getElementById("cart-table");
// console.log(generatecartitems);
// let generatecart = () => {
//     (generatecartitems.innerHTML = cartitems.map((y) => {
//         let { id, name, price, gst, img } = y;
//         return `<div class="cart-table">
//         <div class="imag"><img width="100" src=${img}></div>
//         <div class="name"><p>${name}</p></div>
//         <div class="cost"><p>"Rs"${price}</p></div>
//         <div><button onClick="increment(${price})">click me</button></div>
//         </div>`;
//     }).join(""));
// };
// generatecart();
// let totalamt=document.getElementById("cartamt");
// let generatetotal=()=>{
//     totalamt.innerHTML=cart
// }

// let generatecartitems=()=>{
//     if(shoppingCart.len)
// }