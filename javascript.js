
//initial declarations
let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let rainbowButton = document.getElementById('rainbow');
let shadingButton = document.getElementById('shade');
let bwButton = document.getElementById('black-and-white');


let numOfDivs = 16; 


//function to create grid

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    container.appendChild(square);
   // square.addEventListener('mouseover', colorFunction);
    //square.addEventListener('mouseover', shadingFunction);
       }
} 
createGrid();
let squares = document.querySelectorAll('.divSquare');

console.log(squares)

//event listeners

clearButton.addEventListener('click', popupFunction);
rainbowButton.addEventListener('click', rainbowListener);
shadingButton.addEventListener('click', shadingListener);
bwButton.addEventListener('click', bwListener);

function rainbowListener() {
    squares.forEach(square => square.addEventListener('mouseover', rainbowFunction));
}

function shadingListener() {
    squares.forEach(square => square.addEventListener('mouseover', shadingFunction));
}

function bwListener() {
    squares.forEach(square => square.addEventListener('mouseover', bwFunction));
}



//function asking for the size of the grid


function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your sketchpad to have?', 16);

   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');}

   container.innerHTML = '';
   createGrid();
}


//random rgb color generator

function randomRGB() {
    let r = Math.floor(Math.random() * 255)+1;
    let g = Math.floor(Math.random() * 255)+1;
    let b = Math.floor(Math.random() * 255)+1;
    return `rgb(${r}, ${g}, ${b})`;
}

//functions to color squares

function bwFunction(e) {
    e.target.classList.add('colored-black');
    // console.log('oye')
}
function rainbowFunction(e) {
    e.target.style.backgroundColor = randomRGB();
}

function shadingFunction(e) {
    e.target.classList.add('shaded');
    let comps = getComputedStyle(e.target);
    let currentBrightness = comps.getPropertyValue('filter').slice(11, -1);
    let newBrightness = (Number(currentBrightness)) - 0.1; 
    e.target.style.filter = `brightness(${newBrightness})`
}

//create buttons to switch between modes
//optional - color picker
//style the page