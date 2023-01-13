/*var newGoods = [];
for(var key in goods) {
  newGoods.push(goods[key])
};

let result = [];

getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

while (result.length != 4) {
    let index = getRandomInt(newGoods.length);    
    result.push(newGoods[index]);    
    result = result.filter((v, i, arr) =>  arr.indexOf(v) == i);
};
 
result.forEach((item) => {
    const out = `<div class="block2-container-card">
    <img src="${item.image}">
    <div class="block2-container-card-txt1">${item.discription}</div>
    <div class="rating-mini">
	<span class="active"></span>	
	<span class="active"></span>    
	<span class="active"></span>  
	<span></span>    
	<span></span>
</div>
    <div class="block2-container-card-txt2"><span>As low as: </span>$${item.cost}</div>
    <button><i class="fa fa-shopping-bag"></i> Add to CARD</button>
    </div>
    `
    goodsContainer.insertAdjacentHTML('beforeend', out);
});*/
