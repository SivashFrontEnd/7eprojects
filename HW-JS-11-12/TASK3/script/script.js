let p = document.createElement('p');
p.setAttribute('id', 'p')
p.innerText = 'ввести номер телефону у форматі 000-000-00-00';
document.body.appendChild(p)

let x = document.createElement("INPUT");
x.setAttribute('id', 'inp')
x.setAttribute("type", "text");
x.setAttribute('placeholder', '000-000-00-00')
x.setAttribute('maxlength', "13")
document.body.appendChild(x);

let y = document.createElement("input");
y.setAttribute('id', 'submit');
y.setAttribute('type', 'submit');
document.body.appendChild(y);

let inp = document.getElementById('inp');
let pattern = /\d{3}\-\d{3}-\d{2}-\d{2}/;
let submit = document.getElementById('submit');

//варіант 1 - простий

submit.onclick = () => {
if (pattern.test(inp.value) == true) {
window.open('https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg');
} else {document.getElementById('p').innerText = 'невірний формат, ввести номер телефону у форматі 000-000-00-00 ';
inp.value = ''}
}

//варіант 2 - з перевіркою до натиску кнопки

/*inp.onkeydown = (e) => {
    var curLen = inp.value.length;

    if (curLen == 3) 
    	inp.value = inp.value + "-";
      
    if (curLen == 7)
    	inp.value = inp.value + "-";

        if (curLen == 10)
        inp.value = inp.value + "-";
        

        inp.addEventListener('keyup', function(e) {
            if (this.value.length >= 13) {
                if (pattern.test(inp.value) == true) {
                    document.getElementById('p').innerText = 'ok, можете надіслати';
                    submit.onclick = () => {
                        window.open('https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg');
                    };
                } else {document.getElementById('p').innerText = 'Ви зробили помилку, повторити ввод номеру телефону у форматі 000-000-00-00';
                inp.value = ''};
            }
        });
        
        if (e.keyCode == 8) {
            inp.value = inp.value.substring(0, inp.value.length - 1);
        }
};
*/


