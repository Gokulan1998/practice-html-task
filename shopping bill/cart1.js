let cartitems = [{
    id: "one",
    name: "tomato",
    price: 40,
    gst: 2.40,
    img: "images/tomatoes-1296x728-feature.jpg"
},
// (rest of your cartitems array)
];

let total = 0;

cartitems.forEach((x) => {
    console.log(x.price);
    total += x.price;
});

console.log(total);

let shoppingCart = document.getElementById("price-table");
console.log(shoppingCart);

let cartitem = () => {
    shoppingCart.innerHTML = cartitems.map((x) => {
        let { id, name, price, gst, img } = x;
        console.log("obj", x);
        console.log(id, img, name, price, gst);
        return `
            <div class="price-table">
                <p class="cart-name">${name}</p>
                <p>${price}</p>
                <button onclick="increment('${id}')">click</button>
            </div>
        `;
    }).join("");
};

cartitem();

let totalprice = 0;

function increment(id) {
    console.log(id);
    let item = cartitems.find((x) => x.id === id);
    totalprice += item.price;
    console.log(totalprice);
    cartitem();
}
