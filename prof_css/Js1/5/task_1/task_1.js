
var span = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var chess = document.querySelector('.main');
for (i = 0; i <= 8; i++) {
    for (j = 0; j <= 8; j++) {
        if ((i == 0 && j > 0) || (j == 0 && i > 0)) {
            var item2 = document.createElement('div');
            chess.appendChild(item2);
            item2.classList.add('item2');
            if (i == 0) item2.innerHTML = span[j - 1];
            if (j == 0) item2.innerHTML = i;
        }
        else if (i > 0 && j > 0) {
            var item = document.createElement('div');
            chess.appendChild(item);
            item.classList.add('item');
        } else {
            var item2 = document.createElement('div');
            chess.appendChild(item2);
            item2.classList.add('item2');
        }
    }
}
