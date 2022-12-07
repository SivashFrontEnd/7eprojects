window.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector(".keys"),
    display = document.querySelector(".display > input")
    let num1 = "";
    let num2 = "";
    let sign = "";
    let finish = false;
    let m = "";
    let f = false;
    let x = document.createElement("span");
    let elemText = document.createTextNode("m");
      
    btn.addEventListener("click", function (e) {
         if (calc.value1.includes(e.target.value)) {
                if (num2 === "" && sign === "") {
                num1 += e.target.value;
                if (num1 === "0") {
                    num1 = "";
                    show("0", display);
                    return;
                };
                if (num1 === ".") {
                    num1 = "0" + ".";
                    show(num1, display);
                    return;
                }
                show(num1, display);
                } 
                else if (num1 !== "" && num2 !== "" && finish) {
                num2 = e.target.value;
                finish = false;
                show(num2, display);
                } 
                else {
                    num2 += e.target.value;
                    show(num2, display);
                }
                
                return;
            }

            if (sign === "") {
            if (calc.value2.includes(e.target.value)) {
                sign = e.target.value;
                return;
            }} ;
        

         if (e.target.value == "C") {
            display.value = "";
            num1 = "";
            num2 = "";
            sign = "";
            finish = false;
         }
        
         if(e.target.value === "=") {
            switch(sign) {
                case "+": num1 = (+num1) + (+num2);
                break;
                case "-": num1 = num1 - num2;
                break;
                case "*": num1 = num1 * num2;
                break;
                case "/": 
                if (num2 === "0") {
                    const er = "error"
                    show(er, display);
                    return;
                }
                num1 = num1 / num2;
                break;
            }
            
            finish = true;
            show(num1, display);
         }
        if (sign !== "" && e.target.value === "*" ) {
            switch(sign) {
                case "+": num1 = (+num1) + (+num2);
                break;
                case "-": num1 = num1 - num2;
                break;
                case "*": num1 = num1 * num2;
                break;
                case "/": 
                if (num2 === "0") {
                    const er = "error"
                    show(er, display);
                    return;
                }
                num1 = num1 / num2;
                break;
            }
            sign = "*";
            finish = true;
            show(num1, display);
        }

        if (sign !== "" && e.target.value === "/" ) {
            switch(sign) {
                case "+": num1 = (+num1) + (+num2);
                break;
                case "-": num1 = num1 - num2;
                break;
                case "*": num1 = num1 * num2;
                break;
                case "/": 
                if (num2 === "0") {
                    const er = "error"
                    show(er, display);
                    return;
                }
                num1 = num1 / num2;
                break;
            }
            sign = "/";
            finish = true;
            show(num1, display);
        }

        if (sign !== "" && e.target.value === "-" ) {
            switch(sign) {
                case "+": num1 = (+num1) + (+num2);
                break;
                case "-": num1 = num1 - num2;
                break;
                case "*": num1 = num1 * num2;
                break;
                case "/": 
                if (num2 === "0") {
                    const er = "error"
                    show(er, display);
                    return;
                }
                num1 = num1 / num2;
                break;
            }
            sign = "-";
            finish = true;
            show(num1, display);
        }

        if (sign !== "" && e.target.value === "+" ) {
            switch(sign) {
                case "+": num1 = (+num1) + (+num2);
                break;
                case "-": num1 = num1 - num2;
                break;
                case "*": num1 = num1 * num2;
                break;
                case "/": 
                if (num2 === "0") {
                    const er = "error"
                    show(er, display);
                    return;
                }
                num1 = num1 / num2;
                break;
            }
            sign = "+";
            finish = true;
            show(num1, display);
        }

        if (e.target.value === "m+" || e.target.value === "m-") {
            m = display.value;
            let y = document.querySelector(".display");
        document.getElementById('mrc').disabled = false;
        y.appendChild(x);
        
        x.appendChild(elemText);
        x.style.position = "absolute";
        x.style.top = "1px";
        x.style.left = "5px";
        }

        if (e.target.value === "mrc" && f === false) {
            f = true;
            show(m, display);
            return;
        };

        if(e.target.value === "mrc" && f === true) {
            m = "";
            show(m, display);
            x.textContent = "";
            f = false;
            document.getElementById('mrc').disabled = true;
            return;
        }
        
    })
    
})

const calc = {
    value1 : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
    value2 : ["+", "-", "*", "/"]
}


function show (value, el) {
 el.value = value
}

