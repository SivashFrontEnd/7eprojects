document.write('<div class="box1"></div><div class="block"><div class="box2"></div><div class="box3"></div></div><div class="box4"></div>')

var nameClient = prompt("Ваше ім'я?");
var surname = prompt("Ваша фамілія?");
var old = prompt("Ваш вік?");
var boxElem = document.querySelector(".box3");
var boxElem1 = document.querySelector(".box3");
var boxElem2 = document.querySelector(".box3");
boxElem.innerHTML = nameClient;
boxElem1.innerHTML += ' ' + surname;
boxElem2.innerHTML += ' ' + old;

var a = parseInt(prompt("Введить перше число"));
var b = parseInt(prompt("Введить друге число"));
var c = parseInt(prompt("Введить третє число"));
var sum = a + b + c;
var sarf = sum / 3;
var boxElem3 = document.querySelector(".box1");
boxElem3.innerHTML = sarf;

var x = 6; 
var y = 14; 
var z = 4;
x += y - x++ * z ;
/* x = -4, тому що першим виконається х++ буде 6,
потом множення 6*z(4) буде 24, потім вичитання y(14)-24 буде -10, потім х = 6 - 10, буде -4
*/
x = 6; 
y = 14; 
z = 4;
z = --x - y * 5 ; 
/* z = -65, тому що спочатку виконається --х(6-1=5), потім множення y(14)*5 буде 70, 
потім вичитання 5-70 буде -65
*/
x = 6; 
y = 14; 
z = 4;
y /= x + 5 % z;
// y = 2, тому що спочатку виконається 5 % Z(4) = 1, потім х(6) + 1 = 7, потім y = y(14)/7 = 2
x = 6; 
y = 14; 
z = 4;
z - x++ + y * 5;
// буде -72, тому що спочатку виконається х++(6) буде 6, потім у(14)+5 = 70, потім х++(6)+70 = 76, потім z(4)-76 = -72
x = 6; 
y = 14; 
z = 4;
x = y - x++ * z;
// x = -10, тому що перше виконається х++(6) = 6, потім х++(6)*z(4) = 24, потім у(14)-24 = -10