function createGrid () {
    const container = document.querySelector('#container');
    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}

//Change color of every pixel hoverd
function changeColor(pixel) {
    pixel.target.style.backgroundColor = 'black';
}

//Load grid to webpage, start program here
addEventListener('DOMContentLoaded', () => {
    createGrid();
    attachEventListeners();


    const button = document.querySelector('button');
    // When button is clicked delete the old grid and create a new one
    button.addEventListener('click', () => {
        reomveOldGrid();
        //Create new grid with new pixel size
        createNewGrid(pixelPerRow());
        attachEventListeners();
    });
});

//Delete the old grid pixel by pixel
function reomveOldGrid () {
    const oldPixels = document.querySelectorAll('.pixel');
    oldPixels.forEach(oldPixels => {
        oldPixels.remove();
    });
}

//Return pixel per row
function pixelPerRow () {
    const getInput = document.querySelector('#numberButton');
    const number = getInput.value;
    if (number < 1 || number > 100) {
        alert("Number has to be between 1 and 100, please create a valid grid!");
        return;
    }
    return number;
}

//Create new grid with updatet pixel size
function createNewGrid (number) {
    const container = document.querySelector('#container');
    for (let i = 0; i < number*number; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        //Height and width of a pixel is 100/ pixel per row in percent
        const heightWidth = `${100 / number}%`;
        //Update css values
        pixel.style.height = heightWidth;
        pixel.style.flexBasis = heightWidth;
        container.appendChild(pixel);
    }
}

//Section for random color generating
//Random number between 0 and 255
function randomNumber () {
    return Math.floor(Math.random() * 256);
}

//Create a random hexadecimal color
function createRandomColor (red, green, blue) {
    const hexaRed = red.toString(16);
    const hexaGreen = green.toString(16);
    const hexaBlue = blue.toString(16);
    return '#' + hexaRed + hexaGreen + hexaBlue;
}

//Change color of a pixel to a random color
function changeToRandomColor(pixel) {
    const randomRed = randomNumber();
    const randomGreen = randomNumber();
    const randomBlue = randomNumber();
    pixel.target.style.backgroundColor = `${createRandomColor(randomRed, randomGreen, randomBlue)}`;
}

//Listen to hovering and change Color
function attachEventListeners () {
    const colorButton = document.querySelector("#color");
    const blackButton = document.querySelector("#black");
    const pixels = document.querySelectorAll('.pixel');

    colorButton.addEventListener('click', () => {
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseover', changeToRandomColor);
    });
    });

    blackButton.addEventListener('click', () => {
        pixels.forEach(pixel => {
            pixel.addEventListener('mouseover', changeColor);
        }); 
    });
}