import { createCategoryInputModal , validateInputCategory } from "./functions.js";
import { mySelectModalVideo, myBtnSaveVideo, myBtnSaveRestoran, mySelectModalRestoran } from "./my.js";

if (!localStorage.BDStore) {
    localStorage.BDStore = JSON.stringify([])
} else {
    console.log(localStorage.BDStore)
}

let categoryName = null;

try {
    //main page 
    const btnModal = document.getElementById("btn-modal"),
        selectModal = document.getElementById("select-data"),
        btnClose = document.getElementById("close"),
        btnSave = document.getElementById("save"),
        modalWindow = document.querySelector(".container-modal"),
        categoryInfo = document.querySelector(".category-info");

    btnModal.addEventListener("click", () => {
        modalWindow.classList.add("active");
    })

    btnClose.addEventListener("click", () => {
        modalWindow.classList.remove("active")
    })

    btnSave.addEventListener("click", (e) => {
        if (categoryName === "Магазин") {
            let objInfo = {
                id: "",
                productName: "",
                porductPrice: "",
                productImage: "",
                productDescription: "",
                productQuantity: "",
                keywords: [],
            };
            validateInputCategory(objInfo)
        }
        

    })

    

    selectModal.addEventListener("change", (e) => {
        categoryInfo.innerHTML = ""
        if (e.target.value === "Магазин") {
            categoryName = "Магазин"
            categoryInfo.insertAdjacentHTML("afterbegin", createCategoryInputModal(store).join(""));
        }
    })
    
} catch (e) {
    console.error(e)
}


//const restoration = ["Назва продукта", "Введіть грамовку", "Введіть склад", "Вартість страви", "Зобреження", //"Гарячі слова, розділяйте комою.", "Вага фінальна"];
const store = ["Назва продукта", "Введіть вартість", "Посилання на зображення", "Опис товару", "Гарячі слова, розділяйте комою."]

mySelectModalRestoran();
mySelectModalVideo();
myBtnSaveVideo();
myBtnSaveRestoran();