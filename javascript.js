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
});