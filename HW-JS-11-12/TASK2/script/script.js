let intervalHandler;


const get = id => document.getElementById(id);
const hour = document.getElementById('hour');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
let S = 0, M = 0, H = 0;

const count = function(){
    //Плюсик перед строкой преобразует его в число
    S++;
    //Если результат меньше 10, прибавляем впереди строку '0'
    if( S < 10 ) { S = '0'+ S; }
    if( S == 60 ) {
      S = '00';
      //Как только секунд стало 60, добавляем +1 к минутам
      M++;
      //Дальше то же самое, что и для секунд
      if( M < 10 ) { M = '0' + M; } 
      if( M == 60 ) {
        //Как только минут стало 60, добавляем +1 к часам.
        M = '00';
        H++;
        if( H < 10 ) { H = '0' + H; }
      }
    }
    secs.innerText = S;
    mins.innerText = (M == 0 ? '0' + M : M);
    hour.innerText = (H == 0 ? '0' + H : H);
    //Тикает всё через одну функцию, раз в секунду.
  }
const black = document.getElementById("black");
get("startButton").onclick = () => {
    intervalHandler = setInterval(count, 1000);
    black.style.cssText = "background-color: green";
}


var element = document.getElementById("startButton");
element.addEventListener("click", function(){
this.disabled = true;
document.getElementsByClassName(".black").style.cssText = "background-color: green";    
});


get("stopButton").onclick = () => {
    // останавливаем таймер, по которому вызывается функция count
    clearInterval(intervalHandler);
    element.disabled = false;
    black.style.cssText = "background-color: red";
}

get("resetButton").onclick = () => {
    black.style.cssText = "background-color: grey";
    secs.innerText = '00';
    mins.innerText = '00';
    hour.innerText = '00';
    S = 0;
    M = 0;
    H = 0;
}