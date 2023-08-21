
//initial declarations

let container = document.getElementById('container');
let numOfDivs = 16*16; 

//for loop to create squares, add event listeners

for (let i = 0; i < numOfDivs; i++) {
    let square = document.createElement('div');
    square.classList.add('divSquare');
    container.appendChild(square);
    square.addEventListener('mouseover', colorFunction);
}

//function to color squares

    function colorFunction(e) {
    e.target.classList.add("colored-black");
}

