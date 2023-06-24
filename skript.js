// Spieler
const PLAYER_X = 'X';
const PLAYER_O = 'O';

let currentPlayer = PLAYER_X;
let gameOver = false;
let board = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');

// Zelle anklicken
function cellClick(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWin()) {
            gameOver = true;
            alert('Spieler ' + currentPlayer + ' hat gewonnen!');
        } else if (checkDraw()) {
            gameOver = true;
            alert('Unentschieden!');
        } else {
            togglePlayer();
        }
    }
}

// Spieler wechseln
function togglePlayer() {
    currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
}

// Überprüfen, ob ein Spieler gewonnen hat
function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Reihen
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Spalten
        [0, 4, 8],
        [2, 4, 6], // Diagonalen
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// Überprüfen, ob es ein Unentschieden gibt
function checkDraw() {
    return !board.includes('');
}

// Event Listener für die Zellen
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => cellClick(index));
});
