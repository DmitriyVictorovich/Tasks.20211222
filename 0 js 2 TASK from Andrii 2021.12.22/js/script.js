const bodyColor = document.querySelector('body');

function changeColor() {
    bodyColor.classList.toggle('_active');
}

bodyColor.addEventListener("click", function (event) {
    if (event.target.closest('.menu__button')) {
        changeColor();
    }
});