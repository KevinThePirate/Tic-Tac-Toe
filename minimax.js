import {board} from './script.js'
const bestMove = (board) =>{
    let bestScore = -Infinity;
    let bestMove;
   for(let i = 0; i < board.length; i++){
      if(board[i] == ''){
        //board[i] = ai;
        let score = minimax(board);
        let boardAtI = board[i];
        console.log({i})
        console.log({boardAtI});
        return i;      
        //board[i] = '';
        if(score > bestScore){
            bestScore = score;
            bestMove = i;
        }
      }
      else{
        console.log({i})
        console.log('is filled')
      }
    }
  }
  //let move = random(available);
  //board[move.i] = ai;
  //currentPlayer = human;

  let minimax = board =>{
    return 1;
  }

  export { bestMove, minimax }