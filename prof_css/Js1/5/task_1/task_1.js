var table = document.createElement('table');
for (i = 1; i <= 8; i++) {
    var tr = document.createElement('tr');
    table.append(tr);
    // tr.classList.add('cell');
    for (j = 1; j <= 8; j++) {
        var td = document.createElement('td');
        td.classList.add('cell');
        td.innerHTML = "<h2>" + (i * j) + "&#9816;</h2";
        tr.append(td);
    }
}

document.querySelector('.main').append(table);
