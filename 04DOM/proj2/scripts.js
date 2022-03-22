const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

console.log(pink);

const center = document.querySelector(".center");

// console.log(center);
// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var orangeElementColor = getBGColor(orange);
// var color = getBGColor(pink);

// orange.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = orangeElementColor;
// })

// pink.addEventListener('mouseenter', () => {
//     center.style.backgroundColor = color;
// })

// function changeCenterColor(colorValue, selectedColor) {
//     let selectedColor = getBGColor(colorValue);
//     colorValue.addEventListener('mouseenter', () => {
//         center.style.backgroundColor = selectedColor;
//     });
// }
// changeCenterColor(red);

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.backgroundColor = color;
    });
}
magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));
magicColorChanger(orange, getBGColor(orange));