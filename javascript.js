function createGrid () {
    const container = document.querySelector('#container');
    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}


//Load grid to webpage
addEventListener('DOMContentLoaded', () => {
    createGrid();
});