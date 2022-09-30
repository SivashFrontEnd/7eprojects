/*ДЗ 1
Використовуючи цикли намалюйте: 
1 Порожній прямокутник
Заповнений 
2 Рівносторонній трикутний 
3 Прямокутний трикутник 
4 Ромб
*/
//1 Порожній прямокутник
for (let i = 0; i < 5; ++i) {      
let star = '*';       
let space = "&nbsp;&nbsp;";
    let str = '';
    document.write("<br>");
    
    if (i == 0 || i == 5 - 1) {    
      for (let j = 0; j < 10; ++j) {
        str += star;
    }    
    } else {
      str = star;
      for (let j = 0; j < 10 - 2 ; ++j) {
        str += space;
      }    
      str += star;
    }
    document.write(str);    
}
document.write("<hr>");
//2 Рівносторонній трикутний
for(let i = 0; i < 10; i++) {
    for(let space = (10 - i); space > 0; space--) {
        document.write("&nbsp;")
    }
    for(let j = 0; j <= i; j++) {
        document.write("*")
    }
document.write("<br>")
}
document.write("<hr>")
//3 Прямокутний трикутник
for(let i = 0; i < 10; i++) {
    for(let j = 0; j <= i; j++) {
        document.write("*")
    }
document.write("<br>")
}
document.write("<hr>")
//4 Ромб
let space = 9;
let star = 1;
for(let i = 0; i <= 10; i++) {
    for(let j = 0; j <= space; j++) {
        document.write("&nbsp;")
    }
    for(let a = 0; a < star; a++) {
        document.write("*")
    }
    space--;
    star++;
    if(i >= 10 / 2 && i <= 10){
        star = star - 2;
        space = space + 2;
    }
    document.write("<br>");
}