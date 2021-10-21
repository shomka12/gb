
var img = 4, imgCount = 9; // imgCount - количество файлов в папке img вида card_1.png, img - с какой картинки показывать
var slider = document.querySelector('.slider');
var pic = document.createElement('img');

out(img);

function onClickLeft() {
    img = (img == 1) ? imgCount : (img - 1);
    out(img);
};

function onClickRigth() {
    img = (img == imgCount) ? 1 : (img + 1);
    out(img);
}

function out(img) {
    pic.src = 'img/card_' + img + '.png';
    pic.alt = 'card_' + img + '.png';
    pic.onerror = function f() {
        pic.alt = 'Такого файла нет!';
    }
    pic.className = 'img';
    slider.appendChild(pic);
}


