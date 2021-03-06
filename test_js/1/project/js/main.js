const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'img/laptop.png' },
    { id: 2, title: 'Mouse', price: 20, img: 'img/mouse.png' },
    { id: 3, title: 'Keyboard', price: 200, img: 'img/keyboard.png' },
    { id: 4, title: 'Gamepad', price: 50, img: 'img/gamepad.png' },
    { id: 5, title: 'Headphones', price: 50, img: 'img/headphones.png' },
    { id: 6, title: 'Сomputer chair', price: 50, img: 'img/computer_chair.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (x) => {
    return `<div class="products-item">
                <img src=${x.img} alt="${x.title}">
                <h3>${x.title}</h3>              
                <p>Цена: ${x.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    // console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);