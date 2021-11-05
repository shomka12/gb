class Hamburger {

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(topping) {    // Добавить добавку 
    }

    removeTopping(topping) { // Убрать добавку 
    }

    getToppings(topping) {   // Получить список добавок 
    }

    getSize() {              // Узнать размер гамбургера 
        switch (this.size) {
            case 'big': return 'большой';
            case 'small': return 'маленький';
        }
        return this.size;
    }

    getStuffing() {          // Узнать начинку гамбургера 
        switch (this.stuffing) {
            case 'cheese': return 'с сыром';
            case 'salad': return 'с салатом';
            case 'potato': return 'с картофелем';
        }
    }

    calculatePrice() {       // Узнать цену 
        switch (this.size) {
            case 'small': return 50;
            case 'big': return 100;
            default: return 0;
        }
    }

    calculateCalories() {    // Узнать калорийность 
    }
}

let hamburger = new Hamburger();

hamburger.size = 'small';
hamburger.stuffing = 'salad';

console.log(`Вы заказали ${hamburger.getSize()} гамбургер стоимостью ${hamburger.calculatePrice()} рублей ${hamburger.getStuffing()}`);