let cartitems = [{
    id: "one",
    name: "tomato",
    price: "40",
    gst: "2.40",
    img: "images/tomatoes-1296x728-feature.jpg"
},
{
    id: "two",
    name: "carrot",
    price: "30",
    gst: "1.70",
    img: "images/carrots-673184_1280.jpg"
},
{
    id: "three",
    name: "egg",
    price: "5",
    gst: "0.2",
    img: "images/_105482203__105172250_gettyimages-857294664.jpg"
},
{
    id: "four",
    name: "brinjal",
    price: "35",
    gst: "2.0",
    img: "images/Solanum_melongena_24_08_2012_(1).jpeg"
},
{
    id: "five",
    name: "banana",
    price: "10",
    gst: "NIL",
    img: "images/download.jpeg"
},
{
    id: "six",
    name: "carrot",
    price: "16",
    gst: "NIL",
    img: "images/carrots-673184_1280.jpg"
},
{
    id: "seven",
    name: "spinach",
    price: "25",
    gst: "2.0",
    img: "images/images.jpeg"
}];
let total = 0;
cartitems.map((x) => {
    console.log(x.price);
    total += parseInt(x.price);
})
console.log(total);
let shoppingCart = document.getElementById("price-table");
console.log(shoppingCart)
let cartitem = () => {
    (shoppingCart.innerHTML = cartitems.map((x) => {
        let { id, name, price, gst, img } = x;
        return `
      <div class = "price-table">
        <p class=cart-name>${name}</p>
        <p>${price}</p> 
        <button onclick="increment(${id})">click me</button></div>
        `
    }).join(""))
};

// cartitem();
totalprice = 0;
function increment(x) {
    console.log(x);
    // cartitems();
    // let(parseInt(i))=j;
    //let i = id;
    //console.log(i.id);
    cartitems.find((x) => { })
    totalprice += x.price;
    // totalprice;
    // console.log(totalprice);
    // console.log(xyz);
    // cartitem();
}
let generatecartitems = document.getElementById("cart-table");
console.log(generatecartitems);
let generatecart = () => {
    (generatecartitems.innerHTML = cartitems.map((y) => {
        let { id, name, price, gst, img } = y;
        return `<div class="cart-table">
        <div class="imag"><img width="100" src=${img}></div>
        <div class="name"><p>${name}</p></div>
        <div class="cost"><p>"Rs"${price}</p></div>
        <div><button onClick="increment(${price})">click me</button></div>
        </div>`;
    }).join(""));
};
generatecart();
// let totalamt=document.getElementById("cartamt");
// let generatetotal=()=>{
//     totalamt.innerHTML=cart
// }

// let generatecartitems=()=>{
//     if(shoppingCart.len)
// }