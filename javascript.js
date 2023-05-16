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

//Load grid to webpage
addEventListener('DOMContentLoaded', () => {
    createGrid();

    const pixels = document.querySelectorAll('.pixel');
    // Attach event listeners to each pixel
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', changeColor);
    });


    const button = document.querySelector('button');
    // When button is clicked delete the old grid and create a new one
    button.addEventListener('click', () => {
        reomveOldGrid();
        //TODO: change size of pixel here
        pixelSize();
        createGrid();
    });

});

//Delete the old grid pixel by pixel
function reomveOldGrid () {
    const oldPixels = document.querySelectorAll('.pixel');
    oldPixels.forEach(oldPixels => {
        oldPixels.remove();
    });
}

//Calculate the size of a single pixel
function pixelSize () {
    const getInput = document.querySelector('#numberButton');
    const number = getInput.value;
    pixelPerPixel = (960/number);
    return pixelPerPixel;
}
