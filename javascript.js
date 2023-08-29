
//initial declarations
let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let numOfDivs = 16; 
createGrid();

//popup asking for the size of the grid

clearButton.addEventListener('click', popupFunction);

function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your sketchpad to have?', 16);

   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');}

   console.log(numOfDivs)
   container.innerHTML = '';
   createGrid();
}

//function to create grid, add event listeners

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    container.appendChild(square);
    // square.addEventListener('mouseover', colorFunction);
    square.addEventListener('mouseover', shadingFunction);
    }
}

//random rgb color generator

function randomRGB() {
    let r = Math.floor(Math.random() * 255)+1;
    let g = Math.floor(Math.random() * 255)+1;
    let b = Math.floor(Math.random() * 255)+1;
    return `rgb(${r}, ${g}, ${b})`;
}

//function to color squares

function colorFunction(e) {
// e.target.classList.add('colored-black');
// e.target.style.backgroundColor = randomRGB();
}

// shading function for incremental coloring

function shadingFunction(e) {
    e.target.classList.add('shaded');
    let comps = getComputedStyle(e.target);
    let currentBrightness = comps.getPropertyValue('filter').slice(11, -1);
    let newBrightness = (Number(currentBrightness)) - 0.1; 
    e.target.style.filter = `brightness(${newBrightness})`
}

