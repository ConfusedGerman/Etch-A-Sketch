function createGrid () {
    const container = document.querySelector('#container');
    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
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

// Listen to hovering and change color based on button clicks
function attachEventListeners() {
    const colorButton = document.querySelector("#color");
    const blackButton = document.querySelector("#black");
    const pixels = document.querySelectorAll('.pixel');
    //Default is black color
    let isColorful = false;

    // Function to change color of every pixel hovered to black
    function changeColor(pixel) {
        pixel.target.style.backgroundColor = 'black';
    }

    //Default on change color to black, no button has to be clicked
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', changeColor);
    });
  
    // Function to change color of a pixel to a random color
    function changeToRandomColor(pixel) {
      const randomRed = randomNumber();
      const randomGreen = randomNumber();
      const randomBlue = randomNumber();
      pixel.target.style.backgroundColor = createRandomColor(randomRed, randomGreen, randomBlue);
    }

  
    // Event listener for the "Colorful" button
    colorButton.addEventListener('click', () => {
      if (!isColorful) {
        pixels.forEach(pixel => {
          pixel.removeEventListener('mouseover', changeColor);
          pixel.addEventListener('mouseover', changeToRandomColor);
        });
        isColorful = true;
      }
    });
  
    // Event listener for the "Black" button
    blackButton.addEventListener('click', () => {
      if (isColorful) {
        pixels.forEach(pixel => {
          pixel.removeEventListener('mouseover', changeToRandomColor);
          pixel.addEventListener('mouseover', changeColor);
        });
        isColorful = false;
      }
    });
}