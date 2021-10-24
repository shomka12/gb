
var basket = [];
var storage = localStorage;



function addCart(id) {
    if (typeof storage['basket'] == "undefined"
        || storage['basket'] == null
        || storage['basket'] == ''
    ) {
        storage['basket'] = JSON.stringify([]);
    }
    basket = JSON.parse(storage['basket']);
    var state = true;
    basket.forEach(function (item, i, arr) {
        if (item.id == id) {
            item.quantity++;
            state = false;
        }
    });
    if (basket.count == 0 || state) {
        basket.push({
            id: id,
            title: db[id - 1].title,
            price: db[id - 1].price,
            color: db[id - 1].color,
            size: db[id - 1].size,
            photo: db[id - 1].photo,
            quantity: 1
        });
    }
    storage['basket'] = JSON.stringify(basket);
    console.log(storage)
}

function products() {

    var buffer = "";
    var template = document.getElementById('card-product');
    var elem = document.getElementById('products-list');
    //elem.innerHTML = template.innerHTML;

    db.forEach(function (item, i, arr) {
        var tpl = template.innerHTML;
        tpl = tpl.replace("%photo%", item.photo);
        tpl = tpl.replace("%id%", item.id);
        tpl = tpl.replace("%title%", item.title);
        tpl = tpl.replace("%description%", item.description);
        tpl = tpl.replace("%price%", item.price);
        buffer += tpl;
    });
    elem.innerHTML = buffer;
}

function cart() {
    basket = JSON.parse(storage['basket']);
    var buffer = "";
    var template = document.getElementById('card-product');
    // var cartItem = document.getElementsByClassName('cart-shopping-item');
    var elem = document.getElementById('basket');
    var totalSumm = document.getElementById('totalSumm');
    var cash = document.getElementById('cash');
    var summ = 0, quan = 0;

    basket.forEach(function (item, i, arr) {
        var tpl = template.innerHTML;
        // cartItem.setAttribute('id', item.id);
        // cartItem.id = 'id1';
        // tpl = tpl.replace("%id%", item.id);
        tpl = tpl.replace("%photo%", item.photo);
        tpl = tpl.replace("%id%", item.id);
        tpl = tpl.replace("%title%", item.title);
        tpl = tpl.replace("%description%", item.description);
        tpl = tpl.replace("%price%", item.price);
        tpl = tpl.replace("%color%", item.color);
        tpl = tpl.replace("%size%", item.size);
        tpl = tpl.replace("%quantity%", item.quantity);
        buffer += tpl;
        summ += item.quantity * item.price;
        quan += item.quantity;
    });
    if (quan == 0) {
        elem.innerHTML = "<h2> Корзина пустая </h2>";
    }
    totalSumm.innerHTML = totalSumm.innerHTML.replace("%totalSumm%", summ);
    cash.innerHTML = cash.innerHTML.replace("%cash%", quan);

    elem.innerHTML = buffer;
}

function onQuantity(value) {
    var cartItem = document.getElementsByClassName('.cart-shopping-item');

    console.log(value, cartItem.getat)
}

function onClearBasket() {
    basket = [];
    storage['basket'] = JSON.stringify(basket);
    cart();
    // alert('Очистка корзины')
}
//bootstrap();


// var basket = [product[1], product[2]];

/*function countBasketPrice(goods) {
    var s = 0;
    for (var items of basket) {
        s += basket.count * basket.price;
    }
    return s;
}*/

// console.log()