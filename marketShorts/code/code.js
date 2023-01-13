//вывод 4 рандомных товаров на главную страницу
function ready() {
var goodsContainer = document.querySelector('.block2-container');
let newGoods = [];
var out = '';
for(var key in goods){
  out = `<div class="block2-container-card">
    <img src="${goods[key].image}">
    <div class="block2-container-card-txt1">${goods[key].discription}</div>
    <div class="rating-mini">
	<span class="active"></span>	
	<span class="active"></span>    
	<span class="active"></span>  
	<span></span>    
	<span></span>
</div>
    <div class="block2-container-card-txt2"><span>As low as: </span>$${goods[key].cost}</div>
    <button class="add-to-cart" data-art="${key}"><i class="fa fa-shopping-bag"></i> Add to CARD</button>
    </div>
    `
    newGoods.push(out);
};
console.log(newGoods);
let result = [];

getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

while (result.length != 4) {
    let index = getRandomInt(newGoods.length);    
    result.push(newGoods[index]);    
    result = result.filter((v, i, arr) =>  arr.indexOf(v) == i);
};
result.forEach((item) => {
  goodsContainer.insertAdjacentHTML('beforeend', item);
});

//вывод по 10 товаров на страницу товара

//корзина
var cart = document.querySelector('.cart');
console.log(cart);
};
document.addEventListener("DOMContentLoaded", ready);
