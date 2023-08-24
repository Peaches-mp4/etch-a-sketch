
//initial declarations

let container = document.getElementById('container');
let clearButton = document.getElementById('clear');
let numOfDivs = 16; 
createGrid();

//popup asking for the size of the grid
clearButton.addEventListener('click', popupFunction);

function popupFunction() {
   numOfDivs = prompt('How many squares per side do you want your grid to have?', 16);
   if(numOfDivs > 100) {
    numOfDivs = prompt('Please choose a lower number');
   }
   console.log(numOfDivs)
   removeGrid();
}

//for loop to remove grid

function removeGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {container.remove(document.getElementsByClassName('divSquare'));}
}

//for loop to create squares, add event listeners

function createGrid() {
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.appendChild(square);
    // square.addEventListener('mouseover', colorFunction);
    }


}


//function to color squares

    function colorFunction(e) {
    e.target.classList.add('colored-black');
    }

