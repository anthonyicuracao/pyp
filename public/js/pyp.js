var pypBody = document.querySelector("html>body");
var pypModal = document.querySelector("#pyp-modal");
var pypAccordion = document.querySelectorAll('.pyp-accordion');
var pypRadio = document.querySelectorAll('input[type="radio"]');
var pypCodeInput = document.querySelectorAll('.pyp-code-input');
var pypCodeSubmit = document.getElementById('pyp-code-verify');

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
function pypGoToPageOne(event) {
    event.preventDefault();
    window.location.href = "pyp-page-1.html";
}
function pypGoToPageTwo(event) {
    event.preventDefault();
    window.location.href = "pyp-page-2.html";
}
function pypGoToPageThree(event) {
    event.preventDefault();
    window.location.href = "pyp-page-3.html";
}
function pypGoToPageFour(event) {
    event.preventDefault();
    window.location.href = "pyp-page-4.html";
}
function pypCodeFunc() {
    for (let i = 0; i < pypCodeInput.length; i++) {
        pypCodeInput[i].addEventListener('input', () => {
            if (i === pypCodeInput.length - 1 && pypCodeInput[i].value !== '') {
                pypCodeSubmit.removeAttribute('disabled');
            }
            else {
                pypCodeSubmit.setAttribute('disabled', 'true');
            }
        });
    }
}
function pypFocusNext(currentInput, index) {
    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');
    if (currentInput.value !== '' && index < pypCodeInput.length) {
        pypCodeInput[index].focus();
    } else if (index > 0) {
        pypCodeInput[index - 1].focus();
    }
}
function pypFocusFirst() {
    if (pypCodeInput && pypCodeInput[0] && typeof pypCodeInput[0] !== "undefined") {
        pypCodeInput[0].focus();
    }
}
pypAccordionFunc();
pypRadioFunc();
pypCodeFunc();
pypFocusFirst();
window.addEventListener("click", function (event) {
    if (
        pypModal !== null && typeof pypModal !== "undefined"
    ) {
        if (event.target == pypModal) {
            pypHideModalFunc();
        }
    }
});
