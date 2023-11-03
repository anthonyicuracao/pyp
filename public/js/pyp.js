var pypBody = document.querySelector("html>body");
var pypModal = document.querySelector("#pyp-modal");
var pypAccordion = document.querySelectorAll('.pyp-accordion');
var pypRadio = document.querySelectorAll('input[type="radio"]');
var pypFormInput = document.querySelectorAll('.pyp-code-input');
var pypFormSubmit = document.getElementById('pyp-code-submit');

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
function pypGoToPageFive(event) {
    event.preventDefault();
    window.location.href = "pyp-page-5.html";
}
function pypCodeFunc() {
    for (let i = 0; i < pypFormInput.length; i++) {
        pypFormInput[i].addEventListener('input', () => {
            if (i === pypFormInput.length - 1 && pypFormInput[i].value !== '') {
                pypFormSubmit.removeAttribute('disabled');
            }
            else {
                pypFormSubmit.setAttribute('disabled', 'true');
            }
        });
    }
}
function pypFocusNext(currentInput, index) {
    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');
    if (currentInput.value !== '' && index < pypFormInput.length) {
        pypFormInput[index].focus();
    } else if (index > 0) {
        pypFormInput[index - 1].focus();
    }
}
function pypFocusFirst() {
    if (pypFormInput && pypFormInput[0] && typeof pypFormInput[0] !== "undefined") {
        pypFormInput[0].focus();
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

function optinCheckboxFunc() {
    var optinCheckbox = document.getElementById("optin");
    if (optinCheckbox && typeof optinCheckbox !== "undefined") {
        optinCheckbox.addEventListener("change", function () {
            document.getElementById("submit1").disabled = !this.checked;
        });
    }
}

optinCheckboxFunc();