/*4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/

window.addEventListener("DOMContentLoaded", () => {
    const inp = document.querySelector('#numb');
    const span = document.createElement('span');
    const btn = document.createElement('button');
    let div = document.querySelector('#div');
    let warning = "Please enter correct price";
    let re = '';

   inp.addEventListener('input', function (e) {
this.value = this.value.replace(/[^\-\d.]/g, '');
    });

    inp.addEventListener('focus', function (e) {
inp.classList.add('focus');
inp.classList.remove('minus');
    });

    inp.addEventListener('focusout', function (e) {
        if(e.target.value >= 0) {
        inp.classList.remove('focus');
        this.insertAdjacentElement('beforebegin', span);
        span.textContent = e.target.value;
        btn.textContent = "X";
        span.append(btn);
        div.classList.remove('div');
        } else {
            inp.classList.remove('focus');
            inp.classList.add('minus');
            div.classList.add('div');
        }
    })

    btn.addEventListener('click', function(){
        div.removeChild(span);
        inp.value = "";
    })
})