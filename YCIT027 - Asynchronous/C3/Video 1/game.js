window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }

    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
        }

    if (!board.includes('')) 
        announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
            }
            announcer.classList.remove('hide');
        };

        const isValidAction = (tile) => {
            if (tile.innerText === 'X' || tile.innerText === 'O'){
                return false;
            }
            return true;
        };


        const updateBoard = (index) => {
            board[index] = currentPlayer;
        }


    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach((tile) => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach((tile,index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });



    resetButton.addEventListener('click', resetBoard);
});
 







// function createGameState() {
//     const NAME_OF_GAME = "tic-tac-toe";
//     const NULL_VALUE = " ";
//     const X_VALUE = "X";
//     const O_VALUE = "O";
  
//     let currentPlayer = X_VALUE;
//     let isGameEnded = false;
//     let currentWinner = null; // can be null, "X", "O", or "tie"
  
//     let container = new Map();
//     for (let i = 1; i <= 9; i++) {
//       container.set(i, NULL_VALUE);
//     }
  
//     const _goNextTurn = () => {
//       if (currentPlayer === X_VALUE) {
//         currentPlayer = O_VALUE;
//       } else {
//         currentPlayer = X_VALUE;
//       }
//     };
  
//     const getCurrentPlayer = () => currentPlayer;
  
//     const getGrid = () => container;
  
//     const _checkForGameOver = () => {
//       // console.log(getGrid().values(), [...getGrid().values()]);
  
//       const isGridFilled = [...getGrid().values()].every(
//         (elem) => elem !== NULL_VALUE
//       );
  
//       if (isGridFilled) {
//         isGameEnded = true;
//       }
//     };
  
//     const onPlayerClicks = (cellIndex) => {
//       // Like a bouncer. This method cannot be enterred if you provided bad inputs
//       if (!cellIndex || typeof cellIndex !== "number" || cellIndex < 1 || cellIndex > 9) {
//           return // Exit the function because of bad data
//       } // prettier-ignore
  
//       const currentValue = container.get(cellIndex);
  
//       if (currentValue !== NULL_VALUE) {
//         return; // Exit the function since this cell was already valued
//       }
  
//       container.set(cellIndex, getCurrentPlayer());
//       _goNextTurn();
  
//       _checkForGameOver();
//     };
  
//     return {
//       NAME_OF_GAME,
//       getCurrentPlayer,
//       getIsGameEnded: () => isGameEnded,
//       getCurrentWinner: () => currentWinner,
//       getGrid,
//       onPlayerClicks,
//     };
//   }
  
//   // const gameState = createGameState();
//   window.gameState = createGameState(); // This is the same as the line above ?
  
//   // console.log(gameState.NAME_OF_GAME);
//   // console.log("taco", gameState.getCurrentPlayer());
//   // gameState.goNextTurn();
//   // console.log("taco", gameState.getCurrentPlayer());