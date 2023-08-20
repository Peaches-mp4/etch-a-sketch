//Create a webpage with a 16x16 grid of square divs.
// Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
// It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

//mogu da probam sa document create element koji cu da loopujem odredjeni broj puta; broj puta stavim u var da bi to moglo kasnije da se prilagodjava; sve divove appendujem container divu

//initial declarations

let container = document.getElementById('container');
container.style.cssText = "width: 200pp; height: 200px; background-color: yellow;";
let numOfDivs = 16;

//for loop to create squares

for (let i = 0; i < numOfDivs; i++) {
    let square = document.createElement('div');
    square.style.cssText = "width: 30px; height: 30px; border: 3px solid black; background-color: pink;";
    container.appendChild(square);
}