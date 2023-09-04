
//initial declarations
let container = document.getElementById('container');
let resetButton = document.getElementById('reset');
let rainbowButton = document.getElementById('rainbow');
let shadingButton = document.getElementById('shade');
let bwButton = document.getElementById('black-and-white');
let eraseButton = document.getElementById('erase');
let buttons = document.querySelectorAll('button');
let numOfDivs = 16; 

//function to create grid

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.style.gridTemplateColumns = `repeat(${numOfDivs}, 1fr)`;
    container.appendChild(square);
    }
} 

//create grid, select squares
createGrid();
let squares = document.querySelectorAll('.divSquare');

//event listeners

buttons.forEach(button => button.addEventListener('mouseover', playClick));

resetButton.addEventListener('click', resetFunction);
rainbowButton.addEventListener('click', rainbowListener);
shadingButton.addEventListener('click', shadingListener);
bwButton.addEventListener('click', bwListener);
eraseButton.addEventListener('click', eraseListener);

function rainbowListener() {
    squares.forEach(square => square.addEventListener('mouseover', rainbowFunction));

    //remove other listeners
    squares.forEach(square => square.removeEventListener('mouseover', bwFunction));
    squares.forEach(square => square.removeEventListener('mouseover', shadingFunction));
    squares.forEach(square => square.removeEventListener('mouseover', eraseFunction));
}

function shadingListener() {
    squares.forEach(square => square.addEventListener('mouseover', shadingFunction));

    //remove other listeners
    
    squares.forEach(square => square.removeEventListener('mouseover', bwFunction));
    squares.forEach(square => square.removeEventListener('mouseover', rainbowFunction));
    squares.forEach(square => square.removeEventListener('mouseover', eraseFunction));

}

function bwListener() {
    squares.forEach(square => square.addEventListener('mouseover', bwFunction));

    //remove other listeners

    squares.forEach(square => square.removeEventListener('mouseover', rainbowFunction));
    squares.forEach(square => square.removeEventListener('mouseover', shadingFunction));
    squares.forEach(square => square.removeEventListener('mouseover', eraseFunction));
    
}

function eraseListener() {
    squares.forEach(square => square.addEventListener('mouseover', eraseFunction));

    //remove other listeners

    squares.forEach(square => square.removeEventListener('mouseover', rainbowFunction));
    squares.forEach(square => square.removeEventListener('mouseover', shadingFunction));
    squares.forEach(square => square.removeEventListener('mouseover', bwFunction));

}

//function asking for the size of the grid

function resetFunction() {
   numOfDivs = prompt('How many squares per side do you want your sketchpad to have?', 16);

   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');}

   container.innerHTML = '';
   createGrid();
   squares = document.querySelectorAll('.divSquare')
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
    e.target.style.backgroundColor = 'black';
}

function rainbowFunction(e) {
    e.target.style.backgroundColor = randomRGB();
}

function shadingFunction(e) {
    e.target.classList.add('shaded');
    let comps = getComputedStyle(e.target);
    let currentBrightness = comps.getPropertyValue('filter').slice(11, -1);
    let newBrightness = (Number(currentBrightness)) - 0.1; 
    e.target.style.filter = `brightness(${newBrightness})`;
}

function eraseFunction(e) {
    e.target.style.backgroundColor = 'white';
    e.target.style.filter = 'brightness(100%)';
}

//function to play audio

function playClick() {
    let audio = document.getElementById('btn-click');
    audio.currentTime = 0;
    audio.volume = 0.7;
    audio.play();
}
window.addEventListener('load', playBeach);

function playBeach() {
    let audio = document.getElementById(
    'beach');
    audio.currentTime = 0;
    audio.volume = 0.4;
    audio.play();
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        audio.volume = 0.4;
        this.play();
    }, false);
}
    

//is there some interesting animation I could use on reset?
//copy the codepen animation button and try to reproduce it in a separate file first
//add background music?