const board = document.querySelector('#board');
const colors = ['#DDA0DD', '#EE82EE', '#DA70D6', '#FF00FF', '#FF00FF', '#9400D3', '#9400D3', '#8B008B'];
const SQUARES_NUMBER = 450;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);

    board.append(square);
}

function setColor (e) {
    const element = e.target;
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (e) {
    const element = e.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}