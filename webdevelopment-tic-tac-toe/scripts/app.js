//定義九宮格，計算輸贏
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

//定義跟計算 player 1,2(因為在 id 上就已經有定義 1,2 所以是介由原定好的玩家順序去將名字存進 js 中)
let editedPlayer = 0;
//定義遊戲開始後的點擊行為歸於哪個玩家
let activePlayer = 0;
//定義平盤
let currentRound = 1;
// 定義遊戲結束的快速判斷，解決有贏家後仍可點擊的 bug
let gameIsOver = false;

//儲存 playerName 並設定'X', 'O'
const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
];

//定義，backdrop, dialog
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
//定義，form
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');

//定義，編輯用戶名稱：開啟 dialog
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
//定義，編輯用戶名稱：關閉 dialog
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

//定義，開啟九宮格的按鈕
const startNewGameBtnElement = document.getElementById('start-game-btn');
//定義，九宮格
const gameAreaElement = document.getElementById('active-game');
//定義，九宮格中的每一小格
// const gameFieldElements = document.querySelectorAll('#game-board li');
//定義，九宮格中的每一小格
const gameBoardElement = document.getElementById('game-board');
//定義，顯示輪到的 player
const activePlayerNameElement = document.getElementById('active-player-name');
//定義，game-over 的 ui section
const gameOverElement = document.getElementById('game-over');

//開啟 dialog
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

//關閉 dialog
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
//關閉 dialog， 有點像 click-outside-to-close
backdropElement.addEventListener('click', closePlayerConfig);

//儲存編輯名稱，雖然也可以對 button 做 addEventListener 但因為在按下 submit 按鈕時也是提交表單的意思
formElement.addEventListener('submit', savePlayerConfig);

//開啟九宮格
startNewGameBtnElement.addEventListener('click', startNewGame);
//對個別九宮格行為
// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);