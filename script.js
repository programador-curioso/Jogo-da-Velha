// Initial Data
let square = {
    a1: 'x', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: 'o', c3: ''
};

let player = '';
let warning = '';
let playing = false;

reset();

// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('div[data-item=a1]').addEventListener('click', itemClick);

// Functions
function reset() {
    warning = '';

    let random = Math.floor(Math.random() * 2);
    // player = (random === 0) ? 'x' : 'o';
    // ou    
    if(random === 0) {
        player = 'x';
    } else {
        player = '0';
    };

    for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
};

function renderSquare() {
    for(let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i]
    };
};

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML= warning;
};