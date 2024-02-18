let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");


function applyChanges() {
console.log(bgColorInputElement, fontColorInputElement, fontSizeInputElement, paddingInputElement, borderRadiusInputElement, customButtonElement)

    let bgColorInputElementValue = bgColorInputElement.value;
    let fontColorInputElementValue = fontColorInputElement.value;
    let fontSizeInputElementValue = fontSizeInputElement.value;
    let fontWeightInputElementValue = fontWeightInputElement.value;
    let paddingInputElementValue = paddingInputElement.value;
    let borderRadiusInputElementValue = borderRadiusInputElement.value;

    customButtonElement.style.backgroundColor = bgColorInputElementValue;
    customButtonElement.style.color = fontColorInputElementValue;
    customButtonElement.style.fontSize = fontSizeInputElementValue;
    customButtonElement.style.fontWeight = fontWeightInputElementValue;
    customButtonElement.style.padding = paddingInputElementValue;
    customButtonElement.style.borderRadius = borderRadiusInputElementValue;


}
