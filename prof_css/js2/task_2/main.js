class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    addTopping(topping) {    // Добавить добавку 
        this.toppings.push(topping);
    }
    removeTopping(topping) { // Убрать добавку 
        let index = this.toppings.indexOf(topping);
        if (index > -1) {
            this.toppings.splice(index, 1);
        }
    }
    getToppings() {   // Получить список добавок 
        return this.toppings;
    }
    getSize() {              // Узнать размер гамбургера 
        return this.size;
    }
    getStuffing() {          // Узнать начинку гамбургера 
        return this.stuffing;
    }
    calculatePrice() {       // Узнать цену 
        let summ = 0;
        summ += (this.getSize() == 'small') ? 50 : 100;
        switch (this.getStuffing()) {
            case 'salad': { summ += 20; break; }
            case 'cheese': { summ += 10; break; }
            case 'potato': { summ += 15; break; }
        }
        this.getToppings().forEach(item => {
            switch (item) {
                case 'seasoning': { summ += 15; break; }
                case 'mayonnaise': { summ += 20; break; }
            };
        });
        return summ;
    }
    calculateCalories() {    // Узнать калорийность 
        let calories = 0;
        calories += (this.getSize() == 'small') ? 20 : 40;
        switch (this.getStuffing()) {
            case 'salad': { calories += 5; break; }
            case 'cheese': { calories += 20; break; }
            case 'potato': { calories += 10; break; }
        }
        this.getToppings().forEach(item => {
            if (item == 'mayonnaise') calories += 5;
        });
        return calories;
    }
}

let hamburger = new Hamburger();

hamburger.size = 'big';
hamburger.stuffing = 'cheese';
hamburger.addTopping('seasoning');
hamburger.addTopping('mayonnaise');
// hamburger.removeTopping('seasoning');
console.log(`Вы заказали: ${hamburger.getSize()} гамбургер, стоимостью: ${hamburger.calculatePrice()} рублей, с начинкой: ${hamburger.getStuffing()}, с добавками: ${hamburger.getToppings().join()} и каллорийностью: ${hamburger.calculateCalories()}`);