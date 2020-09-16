let score;
import {bestMove, minimax} from './minimax.js'
const gameBoard = (() => {
  let turn = 1;
  let board = ["", "", "", "", "", "", "", "", ""];
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  /*const willDisplay = (index) => {
        if(board[index]){
            return board[index]
        }else{
            return ''
        }
    }*/
  const init = () => {
    console.log({turn})
    turn = 1;
    styling();
    console.log({turn})
    board = ["", "", "", "", "", "", "", "", ""];
    if(player1.name != '' && player2.name != ''){
    document.getElementById("game-area").innerHTML = ''
    board.forEach(element => {
      element = '';
    })
    for (let index = 0; index < 9; index++) {
      document.getElementById(
        "game-area"
      ).innerHTML += `<div class="game-spot" id="${index}"></div>`;
    }
    const spots = document.querySelectorAll(".game-spot");
    spots.forEach((square) => {
      square.addEventListener("click", (e) => {
        if (!e.target.innerHTML) {
          
          if (turn % 2 == 0) {
            bestMove(board);
            board[bestMove(board)] = '0'
            //alert(bestMove(board))
            document.getElementById(bestMove(board)).innerHTML = '0'
            document.getElementById(bestMove(board)).style.backgroundColor = 'red';
            turn++;
            console.log(board);
            /*e.target.innerHTML = "0";
            turn++;
            
            board[e.target.id] = "0";
            console.log(board);*/
          } else {
            e.target.innerHTML = "X";
            turn++;
            board[e.target.id] = "X";
            
            console.log(board);
          }
          styling();
          check();
        }
      });
    });
  }else{
    note('ENTER NAMES TO PLAY')
  }
  };
  const styling = () => {
    if(turn % 2 == 0){
      document.getElementById('player1-title').style.backgroundColor = 'transparent'
      document.getElementById('player2-title').style.backgroundColor = '#00c7cf'
      document.getElementById('player2-title').style.color = 'black'
      document.getElementById('player1-title').style.color = 'white'
    }
    else{
      document.getElementById('player2-title').style.backgroundColor = 'transparent'
      document.getElementById('player1-title').style.backgroundColor = '#00c7cf'
      document.getElementById('player1-title').style.color = 'black'
      document.getElementById('player2-title').style.color = 'white'
    }

  }
  
  const note = (push) => {
    document.getElementById('note-area').innerHTML = push;
    setTimeout(function(){ document.getElementById('note-area').innerHTML ='' }, 3000);
  }
  const update = () => {
    document.getElementById("game-area").innerHTML = "";
    for (let index = 0; index < 9; index++) {
      document.getElementById(
        "game-area"
      ).innerHTML += `<div class="game-spot" id="${index}">${board[index]}</div>`;
    }
  };
  const check = () => {
    const checkDraw = (spot) => {
      return Boolean(spot)
    }
    if(board.every(checkDraw)){
      note('DRAW')
      init()
    }
      winConditions.forEach(element => { //Each combination
        //console.log('break')
        /*console.log(board[element[0]])
        console.log(board[element[1]])
        console.log(board[element[2]])*/
        let spaceOne = board[element[0]]
        let spaceTwo = board[element[1]]
        let spaceThree = board[element[2]]
        if(spaceOne != '' && spaceOne == spaceTwo && spaceOne == spaceThree){
          alert('game over');
          if(spaceOne == 'X'){
            player1.score++;
            note(`${player1.name} Wins!`)
            console.log('p1 ' + player1.score);
          }else{
            player2.score++;
            note(`${player2.name} Wins!`)
            console.log('p1 ' + player1.score);
          }
          document.getElementById('area1').innerHTML = player1.score;
          document.getElementById('area2').innerHTML = player2.score;
          gameBoard.init();
        }
        //alert(true + false)
        /*for (let i = 0; i < 3; i++) { //Each element of that combintation
          //console.log(element[i]) // Log every winCondition
          //element is each row of the winConditions Array
          //element[i] is the the number in each of those sub arrays
          //lookingAt is a number that we can feed into Board
          let lookingAt = element[i];
          let elementInQuestion = board[lookingAt]
          //console.log(elementInQuestion);
          console.log({board}, {element}, {lookingAt})
          console.log('test is '+board[element[i+1]])
          console.log('test yurt ' + element[i+1])
          if(elementInQuestion != '' && elementInQuestion == board[element[i+1]]){ //if the place on the board has something in it
            console.log(true)
            console.log(lookingAt)
          }
          
      
        
        } */
        
        /*let counter = 0;
      for (let i = 0; i < 3; i++) { //Each element of that combintation
        //console.log(element[i]) // Log every winCondition
        //element is each row of the winConditions Array
        //element[i] is the the number in each of those sub arrays
        //lookingAt is a number that we can feed into Board
        let lookingAt = element[i];
        let elementInQuestion = board[lookingAt]
        let test = element.every(yoke => {
          console.log({yoke})
          board[yoke] === board[lookingAt];
                          //
        })
        console.log({test})
        /*if(elementInQuestion != ''){
          counter++
          console.log({counter})
          console.log({lookingAt})
        }
        if(counter == 3){
          alert('game over');
        }
      }*/
      

    });

      
  };
  return { update, init, board };
})();
const displayController = (() => {
  return {};
})();
const playerFactory = (name, element) => {
  score = 0;
  const incrementScore = () => score++
  name = document.getElementById('player1').value;
  return { name, element, score, incrementScore };
};
let player1 = playerFactory("", "X");
let player2 = playerFactory("", "0");

gameBoard.init();

function test(){
  alert(document.getElementById('player1').value)
}
window.addEventListener('keyup',() =>{
  player1.name = document.getElementById('player1').value;
  player2.name = document.getElementById('player2').value;
})

/*const inputs = document.getElementsByTagName('input')
for(let cell of inputs){
  cell.style.width = '10%';
}*/

const board = gameBoard.board;
export {board}