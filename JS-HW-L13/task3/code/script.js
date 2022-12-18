/*3. Використовуючи бібліотеку bootstrap створіть форму у якій запитати у користувача данні.
Ім'я, Прізвище (Українською)
Список з містами України 
Номер телефону у форматі +380XX XXX XX XX - Визначити код оператора та підтягувати логотип оператора. 
Пошта 
Якщо поле має помилку показати червоний хрестик  біля поля ❌,  якщо помилки немає показати зелену галочку ✅
Перевіряти данні на етапі втрати фокуса та коли йде натискання кнопки відправити дані*/

validate = (r, v) => r.test(v);

window.addEventListener("DOMContentLoaded", () => {
    const operators = {
        '50': './img/vodafonpng.png',
        '63': './img/lifecell.jpg',
        '66': './img/vodafonpng.png',
        '67': "./img/lievstar.png",
        '68': "./img/lievstar.png",
        '73': './img/lifecell.jpg',
        '93': './img/lifecell.jpg',
        '95': './img/vodafonpng.png',
        '96': "./img/lievstar.png",
        '97': "./img/lievstar.png",
        '98': "./img/lievstar.png",
        '99': './img/vodafonpng.png',
    };
    
    const form = document.getElementById(".my-form");
    const [...inputsForm] = document.querySelectorAll(".my-form input");
    let btn = document.querySelector('.btn');
    let sel = document.querySelector('.form-select');
    let telOp = document.querySelector('.my-form input[type=tel]');
    const logo = document.querySelector('#logo');
    
    
function inputValidate() {
        let item = this;
        if (item.type === "text" && validate(/^[А-яіїґє-]+$/i, item.value)) {
            item.classList.add("success");
            item.classList.remove("error");
        } else if (item.type === "email" && validate(/^[A-z_0-9.]+@[A-z-]+\.[A-z]{1,4}\.?[A-z]*$/, item.value)) {
            item.classList.add("success");
            item.classList.remove("error");
        } else if (item.type === "tel" && validate(/^[0-9]{9}$/, item.value)) {
            item.classList.add("success");
            item.classList.remove("error");
        }
        else {
            item.classList.add("error");
            item.classList.remove("success");
        }  
    };

inputsForm.forEach((item) => {
        if (item.type === "text" || item.type === "email" || item.type === "tel") {
            item.addEventListener("change", inputValidate)
        }
    });

function selectValidate() {
        let selNum = sel.selectedIndex;
        if(selNum === 0){
            sel.classList.add('error');
            sel.classList.remove('success')
        }
        else{
            sel.classList.add('success');
            sel.classList.remove('error')
        }
      };

telOp.addEventListener('input', operatorImg);

function operatorImg () {
    telOp.value = telOp.value.replace(/[^\0-9]/g, '');
    if(telOp.value.slice(0, 2) in operators){
    logo.style.display = 'block';
    logo.src = operators[telOp.value.slice(0, 2)];
    } else {
    logo.style.display = 'none';
    }
}

sel.addEventListener('change', selectValidate);

btn.addEventListener("click", (e) => {
        selectValidate();
        inputsForm.forEach(function (item) {
            if (item.value === "" || item.value === 'Виберіть зі списку') {
                inputValidate.apply(item);   
            }
        })
        e.preventDefault()
    })
});