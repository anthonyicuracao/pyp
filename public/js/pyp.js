// Selecting HTML body element
var pypBody = document.querySelector("html>body");

// Selecting modal element by ID
var pypModal = document.querySelector("#pyp-modal");

// Selecting all elements with class 'pyp-accordion'
var pypAccordion = document.querySelectorAll('.pyp-accordion');

// Selecting all radio input elements
var pypRadio = document.querySelectorAll('input[type="radio"]');

// Selecting form input elements with class 'pyp-num'
var pypFormInput = document.querySelectorAll('.pyp-num');

// Selecting form submit button by ID
var pypFormSubmit = document.getElementById('pyp-code-submit');

// Function to reset all form input elements
function pypReset() {
    // Resetting input values and checkboxes/radio buttons
    // Iterating over all input elements in the document
    var inputElements = document.querySelectorAll('input');
    for (var i = 0; i < inputElements.length; i++) {
        var element = inputElements[i];
        if (element.type !== 'hidden') {
            element.value = '';
            if (element.type === 'checkbox' || element.type === 'radio') {
                element.checked = false;
            }
        }
    }

    // Resetting all forms in the document
    var formElements = document.querySelectorAll('form');
    for (var j = 0; j < formElements.length; j++) {
        var form = formElements[j];
        form.reset();
    }
}

// Function to display the modal
function pypShowModalFunc() {
    // Checking if the modal exists
    if (pypModal !== null && typeof pypModal !== "undefined") {
        // Displaying the modal and preventing body scrolling
        pypModal.setAttribute("style", "display: block !important");
        if (pypBody !== null && typeof pypBody !== "undefined") {
            pypBody.setAttribute("style", "overflow: hidden !important;");
        }
    }
}

// Function to hide the modal
function pypHideModalFunc() {
    // Checking if the modal exists
    if (pypModal !== null && typeof pypModal !== "undefined") {
        // Hiding the modal and allowing body scrolling
        pypModal.setAttribute("style", "display: none !important");
        if (pypBody !== null && typeof pypBody !== "undefined") {
            pypBody.removeAttribute("style");
        }
    }
}

// Function to toggle accordion items
function pypAccordionFunc() {
    // Iterating over each accordion element
    pypAccordion.forEach((accordion) => {
        const pypHead = accordion.querySelector('.pyp-accordion-head');
        const pypBody = accordion.querySelector('.pyp-accordion-body');
        const pypArrow = pypHead.querySelector('.pyp-accordion-arrow');
        
        // Adding click event listener to toggle accordion on click
        accordion.addEventListener('click', () => {
            pypBody.style.display = pypBody.style.display === 'none' ? 'block' : 'none';
            pypArrow.style.transform = pypBody.style.display === 'none' ? 'rotate(0deg)' : 'rotate(-90deg)';
        });
    });
}

// Function to update the state of radio buttons
function pypRadioStateFunc() {
    // Checking if all radio buttons are selected for each product item
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

    // Enabling or disabling continue button based on radio button selection
    var continueButton = document.getElementById('pyp-continue');
    if (allItemsSelected) {
        continueButton.removeAttribute('disabled');
    } else {
        continueButton.setAttribute('disabled', 'disabled');
    }
}

// Function to handle radio button events
function pypRadioFunc() {
    // Adding click and change event listeners to radio buttons
    for (var k = 0; k < pypRadio.length; k++) {
        pypRadio[k].addEventListener('click', pypRadioStateFunc);
        pypRadio[k].addEventListener('change', pypRadioStateFunc);
    }
}

// Functions to navigate to different pages
function pypGoToPageOne(event) {
    event.preventDefault();
    window.location.href = "pyp-page-1.html?";
}

function pypGoToPageTwo(event) {
    event.preventDefault();
    window.location.href = "pyp-page-2.html?";
}

function pypGoToPageThree(event) {
    event.preventDefault();
    window.location.href = "pyp-page-3.html?";
}

function pypGoToPageFour(event) {
    event.preventDefault();
    window.location.href = "pyp-page-4.html?";
}

function pypGoToPageFive(event) {
    event.preventDefault();
    window.location.href = "pyp-page-5.html?";
}

// Function to enable/disable submit button based on input values
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

// Function to focus on the next input field
function pypFocusNext(currentInput, index) {
    // Removing non-numeric characters from the input value
    currentInput.value = currentInput.value.replace(/[^0-9]/g, '');

    // Focusing on the next input field or the previous one
    if (currentInput.value !== '' && index < pypFormInput.length) {
        pypFormInput[index].focus();
    } else if (index > 0) {
        pypFormInput[index - 1].focus();
    }
}

// Function to focus on the first input field
function pypFocusFirst() {
    if (pypFormInput && pypFormInput[0] && typeof pypFormInput[0] !== "undefined") {
        pypFormInput[0].focus();
    }
}

// Function to handle checkbox state change
function pypCheckboxFunc() {
    var pypAgree = document.getElementById("pyp-agree");
    if (pypAgree && typeof pypAgree !== "undefined") {
        pypAgree.addEventListener("change", function () {
            document.getElementById("pyp-btn-agree").disabled = !this.checked;
        });
    }
}

// Event listeners for page load and modal close
window.addEventListener('load', pypReset);
pypAccordionFunc();
pypRadioFunc();
pypCodeFunc();
pypFocusFirst();
pypCheckboxFunc();
window.addEventListener("click", function (event) {
    // Checking if modal exists and if the click event occurred on the modal
    if (pypModal !== null && typeof pypModal !== "undefined") {
        if (event.target == pypModal) {
            pypHideModalFunc();
        }
    }
});
