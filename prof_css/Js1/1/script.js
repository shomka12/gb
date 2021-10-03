// 'use strict';

var money = prompt('Ваш бюджет на месяц?', 100000), 
    time = prompt('Введите дату в формате YYYY-MM-DD', '2021-10-01'),

    appData = {
    budget: money,
    timeData: time,
    expenses: 0,
    optionalExpenses: 0,
    income: [],
    savings: false,
},

answer_1 = 'products', answer_2 = 10000,

expenses = {
        answer_1 : answer_2,
    };

// expenses['products', 10000];

for (var a = 1; a<3; a++) {
        expenses.answer_1 = prompt('Введите обязательную статью расходов в этом месяце', 'products');
        // expenses.answer_2 = prompt('Во сколько обойдется?', 10000);
    };

alert(expenses);