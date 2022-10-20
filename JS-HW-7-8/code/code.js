/*
Створіть клас Phone, який містить змінні number, model і weight.
Створіть три екземпляри цього класу.
Виведіть на консоль значення їх змінних.
Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.
*/

//Створіть клас Phone, який містить змінні number, model і weight.

class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
}

//Створіть три екземпляри цього класу
const phone = new Phone ("+380980001122", "Samsung", "200");

//Виведіть на консоль значення їх змінних.
console.log(phone);


//Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}"
Phone.receiveCall = function (name) {
    console.log(`Телефонує ${name}`)
};

//Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.

Phone.getNumber = function (number) {
    console.log(number)
};

Phone.receiveCall("Nikolay");
Phone.getNumber("+380980001122");