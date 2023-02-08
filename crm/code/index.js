import { isAuthorization, validate } from "./functions.js"
import { loginNow, passwordNow } from "./data.js"



isAuthorization();

try {
    const elLogin = document.querySelector("input[data-type='login']");
    const elPassword = document.querySelector("input[data-type='password']");
    const elLog = document.querySelector("button[data-type='log']");
console.log(loginNow);
console.log(passwordNow);
    //events
    elLogin.addEventListener("change", (e) => {
        validate(new RegExp("^" + loginNow + "$"), e.target.value);
    });

    elPassword.addEventListener("change", (e) => {
        validate(new RegExp("^" + passwordNow + "$"), e.target.value)
    });

    elLog.addEventListener("click", () => {
        if (
            validate(new RegExp("^" + loginNow + "$"), elLogin.value) &&
            validate(new RegExp("^" + passwordNow + "$"), elPassword.value)
        ) {
            localStorage.isAuthorization = true;
            document.location = "/"
        }
    })
} catch (error) {
    console.error(error)
}