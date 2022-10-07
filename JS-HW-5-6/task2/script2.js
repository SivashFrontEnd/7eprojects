function map(fn, array)
        {let newArr = []   
        for (let i of array)
        { newArr.push(fn(i));
        }
        return newArr;
        };
         const mult = function(e){return e*2;}; //функція яка збільшує елементи массиву в 2 рази
        document.write(map (mult, [1, 2, 3, 4, 5])); // вивід 2, 4, 6, 8, 10