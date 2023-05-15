function createGrid () {
    const container = document.querySelector('#container');
    for (let i = 0; i < 256; i++) {
        let pixel = document.createElement('div');
        pixel.style.backgroundColor = 'grey';
        pixel.style.borderColor = 'black';
        pixel.style.borderBlockStartStyle = 'solid';
        pixel.style.width = '8px';
        pixel.style.height = '8px';
        container.appendChild(pixel);
    }
}


//Load grid to webpage
addEventListener('DOMContentLoaded', () => {
    createGrid();
});