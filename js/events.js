// Option 1: add directly on onclick attribute value

// Option 2: add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3: add onclick function by selecting an element
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3 (another)
const aquaBtn = document.getElementById('make-aqua');
aquaBtn.onclick = function makeAqua() {
    document.body.style.backgroundColor = 'aqua';
}