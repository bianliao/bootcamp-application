function resetGameStatus() {
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }
}

function startNewGame() {
    // 1, check each player name has been set
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names for both players!');
        return;
    }

    resetGameStatus();

    // 2, show game area
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }
    //show player name
    activePlayerNameElement.textContent = players[activePlayer].name;
}

//每次點擊會發生的所有事情
function selectGameField(event) {
    if (event.target.tagName !== 'LI' || gameIsOver) { //點擊非 <li> 的部分或是 gameIsOver is true 為無效點擊
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1; //const 出來的會是 string 所以利用數學式將它轉成 number
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) { //當再次點擊已被選取的項目時顯示警告
        alert('Please select an empty field!');
        return;
    }

    //1, add content'x', 'o' when clicking
    selectedField.textContent = players[activePlayer].symbol;//player[0]
    //2, block the area
    selectedField.classList.add('disabled');

    //紀錄每一攔屬於哪一個玩家
    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    //定義，贏家是 checkForGameOver
    const winnerId = checkForGameOver();
    // console.log(winnerId);

    // 當有 winner 時啟動 endGame
    if (winnerId !== 0) {
        endGame(winnerId);
    }

    //計算總點擊次數，當等於九時代表平盤
    currentRound++;

    //3, switch player
    switchPlayer();
}

function checkForGameOver() {
    // hard code 需要把所有都寫出來
    // if (gameData[0][0] === 1 && gameData[0][1] === 1 && gameData[0][2] === 1){ 
    //     return 1;
    // }

    //we are not sure who owns the row1, but the row1 are owned by the same player
    // if (gameData[0][0] > 0 && 
    //     gameData[0][0] === gameData[0][1] && 
    //     gameData[0][1] === gameData[0][2]
    // ){ 
    //     return gameData[0][0];
    // }
    // if (gameData[1][0] > 0 && 
    //     gameData[1][0] === gameData[1][1] && 
    //     gameData[1][1] === gameData[1][2]
    // ){ 
    //     return gameData[1][0];
    // }
    // find the loop >> check the rows for equality

    for (let i = 0; i < 3; i++) {
        if (
          gameData[i][0] > 0 &&
          gameData[i][0] === gameData[i][1] &&
          gameData[i][1] === gameData[i][2]
        ) {
          return gameData[i][0];
        }
    }
    //check the clumns for equality
    for (let i = 0; i < 3; i++) {
        if (
          gameData[0][i] > 0 &&
          gameData[0][i] === gameData[1][i] &&
          gameData[0][i] === gameData[2][i]
        ) {
          return gameData[0][i];
        }
    }

    // Diagonal: Top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
      ) {
        return gameData[0][0];
    }

    // Diagonal: Top right to bottom left
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
      ) {
        return gameData[2][0];
    }

    // we don not have the winner    
    if (currentRound === 9){
        return -1;
    }

    return 0;
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
  
    if (winnerId > 0) {
      const winnerName = players[winnerId - 1].name;
      gameOverElement.firstElementChild.firstElementChild.textContent =
        winnerName;
    } else {
      gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}