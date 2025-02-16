const board = document.getElementById('gameBoard');
const cells = Array.from(board.getElementsByClassName('cell'));
const resetButton = document.getElementById('resetBtn');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
let playerScore = 0;
let aiScore = 0;
let draws = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check if there is a winner
function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

// Function to determine available moves
function availableMoves() {
    return gameState.reduce((acc, curr, index) => {
        if (curr === '') acc.push(index);
        return acc;
    }, []);
}

// Minimax Algorithm
function minimax(state, depth, isMaximizing) {
    const winner = checkWinner();
    if (winner === 'X') return -10 + depth; // Player wins
    if (winner === 'O') return 10 - depth;  // AI wins
    if (state.every(cell => cell !== '')) return 0; // Draw (no more moves)

    const moves = availableMoves();

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let move of moves) {
            state[move] = 'O'; // AI's turn
            let score = minimax(state, depth + 1, false);
            state[move] = ''; // Undo move
            bestScore = Math.max(score, bestScore);
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let move of moves) {
            state[move] = 'X'; // Player's turn
            let score = minimax(state, depth + 1, true);
            state[move] = ''; // Undo move
            bestScore = Math.min(score, bestScore);
        }
        return bestScore;
    }
}

// AI Move using Minimax
function aiMove() {
    const moves = availableMoves();
    let bestScore = -Infinity;
    let bestMove;

    for (let move of moves) {
        gameState[move] = 'O'; // AI's turn
        let score = minimax(gameState, 0, false);
        gameState[move] = ''; // Undo move

        if (score > bestScore) {
            bestScore = score;
            bestMove = move;
        }
    }

    // Make the AI's best move
    gameState[bestMove] = 'O';
    cells[bestMove].textContent = 'O';

    // Check for a winner
    const winner = checkWinner();
    if (winner) {
        setTimeout(() => {
            alert(`${winner} wins!`);
            updateScore(winner); // Update score after AI wins
        }, 100);
        gameActive = false;
    } else if (gameState.every(cell => cell)) {
        // If the board is full and no winner, it's a draw
        setTimeout(() => {
            alert("It's a draw!");
            updateScore(null); // Update score for draw
        }, 100);
        gameActive = false;
    }

    // Switch to the next player (Player 'X')
    currentPlayer = 'X';
}

// Handle click on a cell
function handleCellClick(event) {
    const index = event.target.dataset.index;

    // If the cell is already filled or the game is over, do nothing
    if (gameState[index] || !gameActive || currentPlayer === 'O') return;

    // Mark the cell with the current player's symbol
    gameState[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    // Check if there's a winner
    const winner = checkWinner();
    if (winner) {
        setTimeout(() => {
            alert(`${winner} wins!`);
            updateScore(winner); // Update score after player wins
        }, 100);
        gameActive = false;
    } else if (gameState.every(cell => cell)) {
        // If the board is full and no winner, it's a draw
        setTimeout(() => {
            alert("It's a draw!");
            updateScore(null); // Update score for draw
        }, 100);
        gameActive = false;
    }

    // Switch to the next player (AI or Player)
    currentPlayer = 'O'; // Now it's the AI's turn
    if (gameActive) {
        aiMove();
    }
}

// Function to update scores
function updateScore(winner) {
    if (winner === 'X') {
        playerScore++;
    } else if (winner === 'O') {
        aiScore++;
    } else {
        draws++;
    }

    document.getElementById('playerScore').textContent = `Player: ${playerScore}`;
    document.getElementById('aiScore').textContent = `AI: ${aiScore}`;
    document.getElementById('draws').textContent = `Draws: ${draws}`;
}

// Reset the game
function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X'; // Player always starts first
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
