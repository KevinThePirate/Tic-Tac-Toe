const bestMove = () =>{
    alert('test');
    let bestScore = -Infinity;
    let bestMove;
   for(let i = 0; i < board.length; i++){
      if(board[i] == ''){
        board[i] = ai;
        let score = minimax(board);
        board[i] = '';
        if(score > bestScore){
            bestScore = score;
            bestMove = i;
        }
      }
    }
  }
  let move = random(available);
  board[move.i] = ai;
  currentPlayer = human;