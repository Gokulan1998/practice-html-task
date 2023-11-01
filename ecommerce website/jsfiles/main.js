let shop = document.getElementById("shop");
console.log(shop);
let shopItemsData = [
    {
        id: "jjfkekbeb",
        name: "Casual and formal Shirt",
        price: 45,
        desc: "Good shirt, with pure cotton.",
        img: "shirtimages/71On2XSPuRL._SY741_.jpg"
    },
    {
        id: "bklblembel",
        name: "Casual Shirt",
        price: 100,
        desc: "Good shirt, with pure synthetic.",
        img: "shirtimages/717kxMoZiAL._AC_UY1100_.jpg"
    },
    {
        id: "kldklmklkl",
        name: "Formal Shirt",
        price: 58,
        desc: "Cotton shirt, with best quality.",
        img: "shirtimages/pick_any_3_plain_cotton_solid_shirts_combo_white_model_27_03_2023_700x933.jpg"
    },
    {
        id: "bklblembe",
        name: "Casual Shirt",
        price: 58,
        desc: "Good shirt, with cotton-synthetic mixed quality.",
        img: "shirtimages/61KIViYc9wL._SY679_.jpg"
    }]


let generateshop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || []
        return `<div id=product-id-${id} class="item">
    <img width="200px" src=${img}>
    <div class="details">
        <h3>${x.name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$${x.price}</h2>
            <div class="buttons">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity" id="piece-qty">
                ${search.item === undefined ? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
</div>
`
    })
        .join());
};
let basket = JSON.parse(localStorage.getItem("data")) || []
generateshop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    // console.log(basket);
    update(selectedItem.id);
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search.item === undefined) return;
    else if(search.item===0) return;
    else {
        search.item -= 1;
    }
    // console.log(basket);
    
    // basket=basket.filter((x)=>x.item!==0);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    let cartAmount = document.getElementById(id);
    cartAmount.innerText = search?.item;
    calculation();
};
let calculation = () => {
    // console.log("calculation function is running");
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};
calculation();