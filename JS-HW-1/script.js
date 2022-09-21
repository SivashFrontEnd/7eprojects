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

var x = parseInt(prompt("Введить перше число"));
var y = parseInt(prompt("Введить друге число"));
var z = parseInt(prompt("Введить третє число"));
var sum = x + y + z;
var sarf = sum / 3;
var boxElem3 = document.querySelector(".box1");
boxElem3.innerHTML = sarf;