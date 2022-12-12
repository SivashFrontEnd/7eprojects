/*Создай класс, который будет создавать пользователей с именем и фамилией. Добавить к классу метод для вывода имени и фамилии*/

class User {

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      
    }
    outName () {
        document.getElementById("out").innerText = `${this.firstName} ${this.lastName}`;
        
        };
}


let user = new User("Иван", "Petrov");
user.outName();

/*Создай список состоящий из 4 листов. Используя джс обратись к 2 li и с использованием навигации по DOM дай 1 элементу
синий фон, а 3 красный*/

const secondList = document.querySelectorAll('#list > li')[1];
secondList.innerText = "list2 - I found you";

const firstList = document.querySelectorAll('#list > li')[0];
firstList.style.backgroundColor = "blue";

const thirdList = document.querySelectorAll('#list > li')[2];
thirdList.style.backgroundColor = "red";

/*Создай див высотой 400 пикселей и добавь на него событие наведения мышки. При наведении мышки выведите текстом
координаты, где находится курсор мышки*/

const div = document.createElement('div');
document.body.append(div);
div.style.marginTop = "50px";
div.style.border = "1px solid black";
div.style.width = "400px";
div.style.height = "400px";
div.setAttribute('id', "div");
let d = document.getElementById('div');
const p = document.createElement('p')
document.body.append(p);
p.setAttribute('id', "p")
let px = document.getElementById('p');

d.addEventListener('mousemove', (e) => {
    e = e || window.e
  let x = e.pageX,
    y = e.pageY;

  px.innerText = (`${x - d.offsetLeft}:${y - d.offsetTop}`);
}, {
  capture: true
});

/*Создай кнопки 1,2,3,4 и при нажатии на кнопку выведи информацию о том какая кнопка была нажата*/
let [...button] = document.getElementsByTagName('button');
button.forEach(element => {
    element.addEventListener('click', function(e){
        alert(e.target.innerText);
});
})

/*Создай див и сделай так, чтобы при наведении на див, див изменял свое положение на странице*/

const div2 = document.createElement('div');
document.body.append(div2);
div2.style.width = '100px';
div2.style.height = '100px';
div2.style.backgroundColor = 'blue';
div2.setAttribute('id', 'divtwo');
let d2 = document.getElementById('divtwo');

d2.addEventListener('mouseover', (e) => {
    d2.style.marginLeft = '50px';
});

d2.addEventListener('mouseout', (e) => {
    d2.style.marginLeft = '0px'
})


/*Создай поле для ввода цвета, когда пользователь выберет какой-то цвет сделай его фоном body*/
var x = document.createElement("INPUT");
x.setAttribute("type", "color");
document.body.append(x);
x.setAttribute('id', 'inp');
x.setAttribute('style', 'margin-top: 10px')
let inp = document.getElementById('inp');

inp.addEventListener('input', (e) => {
    document.body.style.backgroundColor = e.target.value;
});

/*Создай инпут для ввода логина, когда пользователь начнет Вводить данные в инпут выводи их в консоль*/
let y = document.createElement('input');
y.setAttribute('type', 'text');
y.setAttribute('id', 'inptwo');
const p2 = document.createElement('p');
p2.setAttribute('id', 'py');
y.setAttribute('style', 'display: block; margin-top: 10px')
document.body.append(y);
document.body.append(p2);
let inptwo = document.getElementById('inptwo');
let py = document.getElementById('py');


inptwo.addEventListener('keyup', function (e) {
        console.log(py = e.target.value);
    });

    /*Создайте поле для ввода данных поле введения данных выведите текст под полем*/

    inptwo.addEventListener('keyup', function (e) {
        document.getElementById('py').innerText = e.target.value;
    });