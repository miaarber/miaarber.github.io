// --------------------------------------------------------------------------
// -------------- Modal MAP -------------------------------------------------
// Найдем необходимые элементы в разметке и запишем их в переменнные
var mapLink = document.querySelector(".map-view"); // находит ссылку

var mapPopup = document.querySelector(".modal-map"); // находит секцию с картой
var mapClose = mapPopup.querySelector(".modal-close"); // находит в .modal-map кнопку закрытия

// Добавим обработчики для открытия и закрытия карты
mapLink.addEventListener("click", function (e) {
    e.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (e) {
    e.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        e.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
