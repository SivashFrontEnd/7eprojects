/*2. Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. Скільки символів має бути в інпуті, зазначається в атрибуті data-length. Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.*/

window.addEventListener("DOMContentLoaded", () => {
    const [...inputs] = document.querySelectorAll("input");

    inputs.forEach(element => {
        element.addEventListener("blur", change)
    });
});

function change (e) {
    if (this.getAttribute('data-length') == this.value.length) {
            this.style.border = "2px solid green"
} else {
    this.style.border = '2px solid red';
    };
};
