"use strict";
function changePage(selectElement){
    let selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}