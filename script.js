let turn = 1;
const gameBoard = (() => {
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
            e.target.innerHTML = "0";
            turn++;
            board[e.target.id] = "0";
            console.log(board);
          } else {
            e.target.innerHTML = "X";
            turn++;
            board[e.target.id] = "X";
            console.log(board);
          }
          check();
        }
      });
    });
  }else{
    note('ENTER NAMES TO PLAY')
  }
  };
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
  const check = () => {/*
    for (let i = 0; i < winConditions.length; i++) {

      let rowCheck = winConditions[i];
      if (rowCheck.every( (val) => board[val] === board[rowCheck[0]])) {
        return board[rowCheck[0]];
      }
      return false;

    }
    for (let index = 0; index < winConditions.length; index++) {
      //Every Row
      
      let lineOfWC = winConditions[index];
      if (
        lineOfWC.every((val) => {
          //if every value in the line we're checking in our winConditions passes the following test
          //are every
          board[val] === lineOfWC[index];
          //console.log({ val });
          //console.log({lineOfWC}, {index})
        })
      ) {
        alert("test2");
      }

      for (let i = 0; i < winConditions[index].length; i++) {
        lineOfWC.forEach(element => {
          if (board[lineOfWC[i]] == 'X'){console.log('x')}
          if (board[element] == 'X'){console.log('y')}
        })
        //Every Item In That Row
        //console.log(winConditions[index][i])
        /*if (!winConditions[index][i]) {
          console.log("UNDIES");
        }
        let test = lineOfWC[i]
        //console.log({test})
        board.forEach(element => {
          if(!element == ''){
            console.log(element)
          }
        })

      }
    }*/
    
      winConditions.forEach(element => { //Each combination
        console.log('break')
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
        else{
          console.log('keep going')
        }
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
  return { update, init };
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
window.addEventListener('keypress',() =>{
  player1.name = document.getElementById('player1').value;
  player2.name = document.getElementById('player2').value;
})