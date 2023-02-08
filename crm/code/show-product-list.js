import { editInputProduct, generatorID, closeWindowModal } from "./functions.js";

const btnSave = document.getElementById("save"),
    btnClose = document.getElementById("close"),
    modalWindow = document.querySelector(".container-modal");

function showProduct() {
    if (document.location.pathname.search("store") !== -1) {
        const data = JSON.parse(localStorage.BDStore);
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = ""
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productQuantity === "" ? "0" : infoProduct.productQuantity}</td>
                <td title="При настиску сортувати.">${infoProduct.porductPrice} грн.</td>
                <td class="edit" data-id="${index}">&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
        const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
        tdEdit.addEventListener("click", (e) => {
            modalWindow.classList.add("active");
            editProduct(data[tdEdit.dataset.id], document.location.pathname)
        })
    })
    } else if (document.location.pathname.search("video") !== -1) {
        const data = JSON.parse(localStorage.BDVideo);
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = ""
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>${infoProduct.productWeb}</td>
                <td class="edit" data-id="${index}">&#128221;</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
        const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
        tdEdit.addEventListener("click", (e) => {
            modalWindow.classList.add("active");
            editProduct(data[tdEdit.dataset.id], document.location.pathname)
        })
    })
    } else if (document.location.pathname.search("restoran") !== -1) {
        const data = JSON.parse(localStorage.BDRestoran);
        const tbody = document.querySelector("table tbody");
        tbody.innerHTML = ""
        tbody.insertAdjacentHTML("beforeend", data.map((infoProduct, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${infoProduct.productName}</td>
                <td title="При настиску сортувати.">${infoProduct.productQuantity === "" ? "0" : infoProduct.productQuantity}</td>
                <td title="При настиску сортувати.">${infoProduct.porductPrice} грн.</td>
                <td class="edit" data-id="${index}">&#128221;</td>
                <td>${infoProduct.status ? "&#9989;" : "&#10060;"}</td>
                <td>${infoProduct.dataAdd ? infoProduct.dataAdd : "Без дати"}</td>
                <td>&#128465;</td>
            </tr>`
        }).join(""))
        const [...edits] = document.querySelectorAll(".edit");
    edits.forEach((tdEdit) => {
        tdEdit.addEventListener("click", (e) => {
            modalWindow.classList.add("active");
            console.log(data[tdEdit.dataset.id])
            editProduct(data[tdEdit.dataset.id], document.location.pathname);
        })
    })
    }
    
}
showProduct()

btnClose.addEventListener("click", closeWindowModal)


const editProduct = (product, url = "") => {
    if (url.includes("store")) {
        const { id, keywords, porductPrice, productName, productQuantity, productDescription, productImage, status } = product;
        const inputs = [
            editInputProduct("text", keywords, "Ключеві слова", generatorID(), ""),
            editInputProduct("number", porductPrice, "Вартість продукту", generatorID(), ""),
            editInputProduct("text", productName, "Назва продукту", generatorID(), ""),
            editInputProduct("number", productQuantity, "Залишок", generatorID(), ""),
            editInputProduct("text", productDescription, "Гарний опис продукції", generatorID(), ""),
            editInputProduct("text", productImage, "Картинка продукту", generatorID(), ""),
            editInputProduct("checkbox", status, "Наявніть/статус", generatorID(), "")
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs)
    } else if (url.includes("video")) {
        const { id, productName, productWeb} = product;
        const inputs = [
            editInputProduct('text', productName, 'Назва', generatorID(), ''),
            editInputProduct('text', productWeb, 'Посилання', generatorID(), '')
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs)
    } else if (url.includes("restoran")) {
        const { id, keywords, porductPrice, productName, productQuantity, productGramm, productCompound, productImage, productFinal, status } = product;
        const inputs = [
            editInputProduct("text", keywords, "Ключеві слова", generatorID(), ""),
            editInputProduct("number", porductPrice, "Вартість продукту", generatorID(), ""),
            editInputProduct("text", productName, "Назва продукту", generatorID(), ""),
            editInputProduct("number", productQuantity, "Залишок", generatorID(), ""),
            editInputProduct("number", productGramm, "Введіть грамовку", generatorID(), ""),
            editInputProduct("text", productCompound, "Введіть склад", generatorID(), ""),
            editInputProduct("text", productImage, "Картинка продукту", generatorID(), ""),
            editInputProduct("text", productFinal, "Вага фінальна", generatorID(), ""),
            editInputProduct("checkbox", status, "Наявніть/статус", generatorID(), "")
        ]
        document.querySelector(".input-edit").dataset.key = id;
        document.querySelector(".input-edit").innerHTML = "";
        document.querySelector(".input-edit").append(...inputs)
    }

}

function saveBtnClick () {
    if (document.location.pathname.includes('store')){
        const data = JSON.parse(localStorage.BDStore);
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
        inputs.forEach((input) => {
            if (input.key === "Ключеві слова") {
                obj.keywords = input.value.split(",")
            } else if (input.key === "Вартість продукту") {
                obj.porductPrice = parseFloat(input.value);
            } else if (input.key === "Назва продукту") {
                obj.productName = input.value;
            } else if (input.key === "Залишок") {
                obj.productQuantity = parseFloat(input.value);
            } else if (input.key === "Гарний опис продукції") {
                obj.productDescription = input.value;
            } else if (input.key === "Картинка продукту") {
                obj.productImage = input.value;
            } else if (input.key === "Наявніть/статус") {
                obj.status = input.checked;
            }
        })
        const [rez] = data.filter((el, i) => {
            return el.id === keyForm
        })
        obj.id = rez.id;
        obj.dataAdd = rez.dataAdd;
        obj.data = rez.data;
    
        data.forEach((el, i) => {
            if (el.id === rez.id) {
                data.splice(i, 1, obj)
            }
        })
        localStorage.BDStore = JSON.stringify(data);
        showProduct()
        closeWindowModal()
    } else if (document.location.pathname.includes("video")) {
        const data = JSON.parse(localStorage.BDVideo);
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
        inputs.forEach((input) => {
             if (input.key === "Назва") {
                obj.productName = input.value;
            } else if (input.key === "Посилання") {
                obj.productWeb = input.value;
            } else if (input.key === "Локальне") {
                obj.productWed = input.value;
            } 
        })
        const [rez] = data.filter((el, i) => {
            return el.id === keyForm
        })
        obj.id = rez.id;
        obj.dataAdd = rez.dataAdd;
        obj.data = rez.data;
    
        data.forEach((el, i) => {
            if (el.id === rez.id) {
                data.splice(i, 1, obj)
            }
        })
        localStorage.BDVideo = JSON.stringify(data);
        showProduct();
        closeWindowModal();
    } else if (document.location.pathname.includes('restoran')) {
        const data = JSON.parse(localStorage.BDRestoran);
        const keyForm = document.querySelector(".input-edit").dataset.key;
        const inputs = document.querySelectorAll(".input-edit input");
        const obj = {};
        inputs.forEach((input) => {
            if (input.key === "Ключеві слова") {
                obj.keywords = input.value.split(",")
            } else if (input.key === "Вартість продукту") {
                obj.porductPrice = parseFloat(input.value);
            } else if (input.key === "Назва продукту") {
                obj.productName = input.value;
            } else if (input.key === "Залишок") {
                obj.productQuantity = parseFloat(input.value);
            } else if (input.key === "Введіть грамовку") {
                obj.productGramm = input.value;
            } else if (input.key === "Введить склад") {
                obj.productCompound = input.value;
            } else if (input.key === "Картинка продукту") {
                obj.productImage = input.value;
            } else if (input.key === "Вага фінальна") {
                obj.productFinal = input.value;
            } else if (input.key === "Наявніть/статус") {
                obj.status = input.checked;
            }
        })
        const [rez] = data.filter((el, i) => {
            return el.id === keyForm
        })
        obj.id = rez.id;
        obj.dataAdd = rez.dataAdd;
        obj.data = rez.data;
    
        data.forEach((el, i) => {
            if (el.id === rez.id) {
                data.splice(i, 1, obj)
            }
        })
        localStorage.BDRestoran = JSON.stringify(data);
        showProduct()
        closeWindowModal()
    }
}


btnSave.addEventListener("click", saveBtnClick)
