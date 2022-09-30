let arr = ["Джаз", "Блюз"];
arr.push("Рок-н-рол");
console.log(arr);
//['Джаз', 'Блюз', 'Рок-н-рол']
let pos = parseInt(arr.length / 2);
let removeArr = arr.splice(pos, 1, "Класика");
console.log(arr);
//['Джаз', 'Класика', 'Рок-н-рол']
let first = arr.shift();
console.log(first);
//Джаз
arr.unshift("Реп", "Реггі");
console.log(arr);
//['Реп', 'Реггі', 'Класика', 'Рок-н-рол']