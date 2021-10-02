function task_1() {
var Tc = parseInt(prompt('Введите температуру по Цельсию:', 36));
var Tf = (9 / 5) * Tc + 32;
alert('Температура по Фаренгейту: ' + Tf);
}

function task_2() {
    var x = parseInt(prompt('Введите переменную x:', 1));
    var y = parseInt(prompt('Введите переменную y:', 1));
    x = x + y;
    y = x - y;
    x = x - y;
    alert('Переменная x = '+ x);
    alert('Переменная y = '+ y);

}

function task_3() {
    var admin, name = 'Василий';
    admin = name;
    alert('Переменная admin = ' + admin + '\nПеременная name = ' + name);
    
}