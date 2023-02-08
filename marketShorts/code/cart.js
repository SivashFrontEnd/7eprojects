

window.addEventListener('DOMContentLoaded', ()=>{
    var cart = {};  

function checkCart(){
    if(localStorage.getItem('cart') != null) {
      cart = JSON.parse(localStorage.getItem('cart'))
    }
};    
    
checkCart();
    
function showCart(){
    let outTotal = '';
    let sumArr = [];
            var out = "";
            let sum = 0;
            for(let key in cart){
                
               out += `<div class="out-cart">
               <img src="../${goods[key].image}" alt="img">
               <div class="out-cart-txt">${goods[key].discription}<p>articul: ${key}</p></div>
               <div><button class="minus" data-art="${key}">-</button><span class="out-span">${cart[key]}</span><button class="plus" data-art="${key}">+</button></div>
               <div><h2 class="totals">${cart[key]*goods[key].cost} ₴</h2></div>
               <div><button class="delete" data-art="${key}">&#128465;</button></div>
               </div>`;
               sumArr.push(cart[key]*goods[key].cost);
            };
            sumArr.forEach(item =>{
                sum = sum + item;
                console.log(sum)
               })
               outTotal = `<h2>Всього до сплати: ${sum} ₴</h2>`;
           
            document.querySelector('#my-cart').innerHTML = out;
            document.querySelectorAll('.plus').forEach(el => {
                el.addEventListener('click', plusGoods); 
            });
            document.querySelectorAll('.minus').forEach(el => {
                el.addEventListener('click', minusGoods); 
            });
            document.querySelectorAll('.delete').forEach(el => {
                el.addEventListener('click', deleteGoods); 
            });
            document.querySelector('.cart-total').innerHTML = outTotal;
            
};

showCart();



function plusGoods(){
    var articul = this.getAttribute('data-art');
    cart[articul]++;
    saveCartToLS();
    showCart();
};

function minusGoods(){
    var articul = this.getAttribute('data-art');
    if(cart[articul] > 1){
        cart[articul]--;
    } else {
        delete cart[articul]
    };
    saveCartToLS();
    showCart();
};

function deleteGoods(){
    var articul = this.getAttribute('data-art');
    delete cart[articul];
    saveCartToLS();
    showCart();
};

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

});