import { createCategoryInputModal, generatorID } from "./functions.js";

if (!localStorage.BDRestoran){
    localStorage.BDRestoran = JSON.stringify([])
} else {
    console.log(localStorage.BDRestoran)
};

if (!localStorage.BDVideo) {
    localStorage.BDVideo = JSON.stringify([])
} else {
    console.log(localStorage.BDVideo)
};



let categoryName = null;

export function mySelectModalRestoran(){
    document.getElementById("select-data").addEventListener("change", (e) => {
        if (e.target.value === "Ресторан") {
            categoryName = "Ресторан"
            document.querySelector(".category-info").insertAdjacentHTML("afterbegin", createCategoryInputModal(restoration).join(""));
        }
    });
    const restoration = ["Назва продукта", "Введіть грамовку", "Введіть склад", "Вартість страви", "Зобреження", "Гарячі слова, розділяйте комою.", "Вага фінальна"];
}

export function mySelectModalVideo(){ 
    document.getElementById("select-data").addEventListener("change", (e) => {
    if (e.target.value === "Відео хостинг") {
        categoryName = "Відео хостинг"
        document.querySelector(".category-info").insertAdjacentHTML("afterbegin", createCategoryInputModal(myVideoHosting).join(""));
        const id = generatorID();
        document.querySelector(".category-info").insertAdjacentHTML('beforeend', `<div><label for="${id}">Локальне</label><input data-type="Локальне" id="${id}" type="file"></div>`)
    }
});
const myVideoHosting = ["Назва", "Посилання"];
}

function videoValidateInputCategory(obj) {
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd =
                `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            if (el.dataset.type === "Назва") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Посилання") {
                obj.productWeb = el.value
            }  else if (el.dataset.type === "Локальне") {
                obj.productWeb = el.value
            }
            el.value = ""
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return
        }
    })

    let data = JSON.parse(localStorage.BDVideo);
    data.push(obj)
    localStorage.BDVideo = JSON.stringify(data);
};

function restoranValidateInputCategory(obj){
    const [...inputs] = document.querySelectorAll(".category-info input");
    inputs.forEach((el) => {
        if (el.value.length >= 3) {
            obj.id = generatorID();
            obj.dataAdd = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
            if (el.dataset.type === "Назва продукта") {
                obj.productName = el.value;
            } else if (el.dataset.type === "Введіть грамовку") {
                obj.porductGramm = parseFloat(el.value);
            } else if (el.dataset.type === "Введить склад") {
                obj.productCompound = el.value
            } else if (el.dataset.type === "Вартість страви") {
                obj.porductPrice = el.value;
            } else if (el.dataset.type === "Зобреження") {
                obj.productImage = el.value;
            } else if (el.dataset.type === "Гарячі слова, розділяйте комою.") {
                obj.keywords.push(...el.value.split(","))
            } else if (el.dataset.type === "Вага фінальна") {
                obj.productFinal = el.value;
            }
            el.value = ""
            el.classList.remove("error")
        } else {
            el.classList.add("error")
            return
        }
    })

    let data = JSON.parse(localStorage.BDRestoran);
    data.push(obj)
    localStorage.BDRestoran = JSON.stringify(data);
};

export function myBtnSaveVideo(){ 
    document.getElementById("save").addEventListener("click", (e) => {
     if (categoryName === "Відео хостинг") {
        let objInfo = {
            id: "",
            productName: "",
            productWeb: "",
        };
        videoValidateInputCategory(objInfo)
    }
})
}

export function myBtnSaveRestoran() {
    document.getElementById("save").addEventListener("click", (e) => {
        if (categoryName === "Ресторан") {
           let objInfo = {
               id: "",
               productName: "",
               porductGramm: "",
               productCompound: "",
               porductPrice: "",
               productImage: "",
               keywords: [],
               productFinal: "",
               productQuantity: "",
           };
           restoranValidateInputCategory(objInfo)
       }
   })
}
