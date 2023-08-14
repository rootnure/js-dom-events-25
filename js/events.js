// Option 1: add directly on onclick attribute value
// <button onclick="console.log(100)">Another Button</button>

// Option 2: add onclick function on the html element
// IMPORTANT: We will mostly use this
// <button onclick="makeRed()">Make Red</button>

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3: add onclick function by selecting an element
// <button id="make-blue">Make Blue</button>

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

// option 4: addEventListener
const yellowBtn = document.getElementById('make-yellow');
yellowBtn.addEventListener('click', makeYellow);

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// option 4 (another)
const orangeBtn = document.getElementById('make-orange');
orangeBtn.addEventListener('click', function makeOrange() {
    document.body.style.backgroundColor = 'orange';
})

// option 4 (FINAL)
// IMPORTANT: We will use this sometimes
/* document.getElementById('element-id').addEventListener(eventType, function () { functionBody }) */
document.getElementById('make-purple').addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple';
})