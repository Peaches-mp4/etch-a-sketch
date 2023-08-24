
//initial declarations

let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let numOfDivs = 16*16; 

//popup asking for the size of the grid
clearButton.addEventListener('click', popupFunction);

function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your grid to have?', 16);
   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');
   }
   console.log(numOfDivs)
}

//for loop to create squares, add event listeners

for (let i = 0; i < numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.appendChild(square);
    // square.addEventListener('mouseover', colorFunction);
}

//function to color squares

    function colorFunction(e) {
    e.target.classList.add('colored-black');
    }

