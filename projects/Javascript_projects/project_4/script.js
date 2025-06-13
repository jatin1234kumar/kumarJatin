'use strict'

let player1Name = prompt('What is the name of player 1 ?');
let player2Name = prompt('What is the name of player 2 ?');
let atWhichScore = Number(prompt('what should be the maximum score(in number)?'));

if (player1Name && player2Name) {
    document.querySelector('.name1').textContent = `${player1Name}`;
    document.querySelector('.name2').textContent = `${player2Name}`;
} else if (!player1Name) {
    document.querySelector('.name1').textContent = `Player 1`;
    document.querySelector('.name2').textContent = `${player2Name}`;
} else if (!player2Name) {
    document.querySelector('.name2').textContent = `Player 2`;
    document.querySelector('.name1').textContent = `${player1Name}`;
} else {
    document.querySelector('.name1').textContent = `Player 1`;
    document.querySelector('.name2').textContent = `Player 2`;
}

// some const values to be used but now they are pre-defined


const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.getElementById('dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

const init = function () {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

// starting scores of player 1 and 2

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
}

// dice hidden

diceEl.classList.add('hidden');

// when we click on button  

btnRoll.addEventListener('click', function () {
    if (playing) {
        // generate a random number

        const dice = Math.trunc(Math.random() * 6) + 1;

        // display the die

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-Img/dice-${dice}.png`;

        // show the score in score active

        if (dice !== 1) {

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            switchPlayer();
        }

    }

});

// Hold button

btnHold.addEventListener('click', function () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        if (score[activePlayer] >= atWhichScore) {
            playing = false;

            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active');

        } else {
            switchPlayer();
        }

    }
});

// New game button

btnNew.addEventListener('click', init);
