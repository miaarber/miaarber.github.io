// -------------- Filter for XS; LG, XL -------------------------------------
function switchVisibility(selector) {
    var allItems = catalogList.querySelectorAll(".catalogItem");
    console.log(allItems)
    var visibleItems = catalogList.querySelectorAll(selector);
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.add("catalog-item-hidden");
    }
    for (var i = 0; i < visibleItems.length; i++) {
        visibleItems[i].classList.remove("catalog-item-hidden");
    }
}


showFilterButton.addEventListener("click", function(e) {
	e.preventDefault();
  var divisor = "";
  var checked = filterForm.querySelectorAll("input[type=checkbox]:checked");
  var selector = "";
  var checkedRadio = filterForm.querySelector("input[type=radio]:checked");
  var radioSelector = ".item-" + checkedRadio.value;

  if (checked.length > 0) {
  	for (var i = 0; i < checked.length; i++) {
    	selector += divisor + radioSelector + ".item-" + checked[i].value;
    	if (divisor === "") {
          divisor = ", "
        }
    }
}
switchVisibility(selector);
  
});
// --------------------------------------------------------------------------



// -------------- Filter for SM/MD ------------------------------------------

function switchVisibility(selector) {
    var allItems = catalogList.querySelectorAll(".catalogItem");
    console.log(allItems)
    var visibleItems = catalogList.querySelectorAll(selector);
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.add("catalog-item-hidden");
    }
    for (var i = 0; i < visibleItems.length; i++) {
        visibleItems[i].classList.remove("catalog-item-hidden");
    }
}


showFilterButtonSMMD.addEventListener("click", function(e) {
	e.preventDefault();
  var divisor = "";
  var checked = filterFormSMMD.querySelectorAll("input[type=checkbox]:checked");
  var selector = "";
  var checkedRadio = filterFormSMMD.querySelector("input[type=radio]:checked");
  var radioSelector = ".item-" + checkedRadio.value;

  if (checked.length > 0) {
  	for (var i = 0; i < checked.length; i++) {
    	selector += divisor + radioSelector + ".item-" + checked[i].value;
    	if (divisor === "") {
          divisor = ", "
        }
    }
}
switchVisibility(selector);
  
});

// --------------------------------------------------------------------------






// Найдем необходимые элементы в разметке и запишем их в переменнные
// var mapLink = document.querySelector(".map-view");

// var mapPopup = document.querySelector(".modal-map");
// var mapClose = mapPopup.querySelector(".modal-close");

// // Добавим обработчики для открытия и закрытия карты
// mapLink.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     mapPopup.classList.add("modal-show");
// });

// mapClose.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     mapPopup.classList.remove("modal-show");
// });

// window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//         evt.preventDefault();
//         if (mapPopup.classList.contains("modal-show")) {
//             mapPopup.classList.remove("modal-show");
//         }
//     }
// });