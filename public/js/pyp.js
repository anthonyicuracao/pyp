var pypBody = document.querySelector("html>body");
var pypModal = document.querySelector("#pyp-modal");
var pypAccordion = document.querySelectorAll('.pyp-accordion');
var pypRadio = document.querySelectorAll('input[type="radio"]');
function pypShowModalFunc() {
    if (
        pypModal !== null &&
        typeof pypModal !== "undefined"
    ) {
        pypModal.setAttribute("style", "display: block !important");
        if (pypBody !== null && typeof pypBody !== "undefined") {
            pypBody.setAttribute("style", "overflow: hidden !important;");
        }
    }
}
function pypHideModalFunc() {
    if (
        pypModal !== null &&
        typeof pypModal !== "undefined"
    ) {
        pypModal.setAttribute("style", "display: none !important;");
        if (pypBody !== null && typeof pypBody !== "undefined") {
            pypBody.removeAttribute("style");
        }
    }
}
function pypAccordionFunc() {
    pypAccordion.forEach((accordion) => {
        const pypHead = accordion.querySelector('.pyp-accordion-head');
        const pypBody = accordion.querySelector('.pyp-accordion-body');
        const pypArrow = pypHead.querySelector('.pyp-accordion-arrow');
        accordion.addEventListener('click', () => {
            pypBody.style.display = pypBody.style.display === 'none' ? 'block' : 'none';
            pypArrow.style.transform = pypBody.style.display === 'none' ? 'rotate(0deg)' : 'rotate(-90deg)';
        });
    });
}
function pypRadioStateFunc() {
    var productItems = document.querySelectorAll('li.pyp-product');
    var allItemsSelected = true;

    for (var i = 0; i < productItems.length; i++) {
        var radioOptions = productItems[i].querySelectorAll('input[type="radio"]');
        var itemSelected = false;

        for (var j = 0; j < radioOptions.length; j++) {
            if (radioOptions[j].checked) {
                itemSelected = true;
                break;
            }
        }

        if (!itemSelected) {
            allItemsSelected = false;
            break;
        }
    }

    var continueButton = document.getElementById('pyp-continue');
    if (allItemsSelected) {
        continueButton.removeAttribute('disabled');
    } else {
        continueButton.setAttribute('disabled', 'disabled');
    }
}
function pypRadioFunc() {
    for (var k = 0; k < pypRadio.length; k++) {
        pypRadio[k].addEventListener('click', pypRadioStateFunc);
        pypRadio[k].addEventListener('change', pypRadioStateFunc);
    }
}
window.addEventListener("click", function (event) {
    if (
        pypModal !== null && typeof pypModal !== "undefined"
    ) {
        if (event.target == pypModal) {
            pypHideModalFunc();
        }
    }
});
pypAccordionFunc();
pypRadioFunc();