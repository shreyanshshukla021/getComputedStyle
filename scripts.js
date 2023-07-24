const red = document.querySelectorAll(".red");
const cyan = document.querySelectorAll(".cyan");
const violet = document.querySelectorAll(".violet");
const orange = document.querySelectorAll(".orange");
const pink = document.querySelectorAll(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGColor(pink);

// pink.addEventListener('mouseentr', ()=>{
//     center.style.background = color;
// });


const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseentr', ()=>{
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));
