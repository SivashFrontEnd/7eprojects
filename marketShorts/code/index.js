window.addEventListener("DOMContentLoaded", () => {

function loadGoods (){
  var out = '';
  var n = "";
for(var key in goodsSales){
  out = `<div class="block2-container-card">
    <img src="${goodsSales[key].image}">
    <div class="block2-container-card-txt1">${goodsSales[key].discription}</div>
    <div class="rating-mini">
	<span class="active"></span>	
	<span class="active"></span>    
	<span class="active"></span>  
	<span></span>    
	<span></span>
</div>
    <div class="block2-container-card-txt2"><span>As low as: </span>$${goodsSales[key].cost}</div>
    <button class="add-to-cart" data-art="${key}"><i class="fa fa-shopping-bag"></i> Add to CARD</button>
    </div>
    `
    document.querySelector('.block2-container').insertAdjacentHTML('beforeend', out);
};

document.querySelectorAll('.add-to-cart').forEach(item =>{
item.addEventListener('click', addToCart);
item.addEventListener('click', (e)=>{
  e.stopPropagation();
  document.querySelector('#modal').classList.remove('modal');
  document.querySelector('#modal').classList.add('modals');
  [...document.querySelectorAll('.add-to-cart')].forEach(item =>{
    item.disabled = true;
  });
});
    });
};

document.addEventListener('click', (e)=>{
      if(e.target.className != "modals"){
        document.querySelector('#modal').classList.remove('modals');
        document.querySelector('#modal').classList.add('modal');
        [...document.querySelectorAll('.add-to-cart')].forEach(item =>{
          item.disabled = false;
        })
  }
  });

var cart = {};

let sum = 0;

function addToCart(){
  var articul = this.getAttribute('data-art');
  if(cart[articul] != undefined){
    cart[articul]++
  } else {
    cart[articul] = 1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  cartN();
  if(Object.keys(cart).length != 0){
    document.querySelector('.cart').style.display = 'block';
  }
};

function checkCart(){
if(localStorage.getItem('cart') != null) {
  cart = JSON.parse(localStorage.getItem('cart'))
  cartN();
}
if(Object.keys(cart).length != 0){
  document.querySelector('.cart').style.display = 'block';
}
};

function cartN(){
  for (let n in cart){
    sum += cart[n];
  }
  document.querySelector('.modal-cart-n').innerHTML = sum;
  sum = 0;
};

loadGoods();
checkCart();

function modalClose(){
  document.querySelector('.modal-close').addEventListener('click', (e)=>{
    document.querySelector('#modal').classList.remove('modals');
          document.querySelector('#modal').classList.add('modal');
    [...document.querySelectorAll('.add-to-cart')].forEach(item =>{
      item.disabled = false;
    })
  });
}
modalClose();

})