//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

//var answers = [];

isEvent('a');
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        isEvent('b');
        isSwitch(event)
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        isEvent('c');
        isSwitch(event)
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
console.log(answers);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function isEvent(w) {
    do {
        ok = false;
        event = +prompt(eval('works.' + w + '00') + eval('works.' + w + '1') + eval('works.' + w + '2') + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(eval('works.' + w + '0'), event);
        }
    } while (!ok);
}

function isSwitch(s) {
    switch (s) {
        case 1: // Первое действие
            isEvent('d');
        case 2: // Второе действие
            isEvent('d');
            break;
        case -1: // Выход
            break;
        default:
            alert('Ошибка');
    }
}
