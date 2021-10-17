// 1 . Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//    Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
// * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна
//  не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру 
//  для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, 
// в который будет вставляться корзина, сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// Создать массив товаров (сущность Product);
// При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” 
// без вложенного кода. Весь вид каталога генерируется JS.

var db = [
    {
        id: 1,
        title: 'MANGO PEOPLE1',
        type: 'T-SHIRT',
        photo: 'img/card_1.png',
        color: 'red',
        size: 'XL',
        price: 50,
        count: 5,
        description: "Known for her sculptural takes on traditional tailoring, <br /> Australian <br />arbiter of cool Kym Ellery <br /> teams up with Moda Operandi."
    },
    {
        id: 2,
        title: 'MANGO PEOPLE2',
        type: 'JACKET',
        photo: 'img/card_3.png',
        color: 'white',
        size: 'M',
        price: 100,
        description: "Known for her sculptural takes on traditional tailoring, <br /> Australian <br />arbiter of cool Kym Ellery <br /> teams up with Moda Operandi."
    },
    {
        id: 3,
        title: 'MANGO PEOPLE3',
        type: 'JACKET',
        photo: 'img/card_3.png',
        color: 'white',
        size: 'M',
        price: 100,
        description: "Known for her sculptural takes on traditional tailoring, <br /> Australian <br />arbiter of cool Kym Ellery <br /> teams up with Moda Operandi."
    }
];

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
            'id': id,
            color: 'white',
            size: 'M',
            quantity: 1
        });
    }
    storage['basket'] = JSON.stringify(basket);
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
    var buffer = "";
    var template = document.getElementById('card-product');
    var elem = document.getElementById('cart-shopping');


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