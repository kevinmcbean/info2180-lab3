function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("square0").textContent;
    b2 = document.getElementById("square1").textContent;
    b3 = document.getElementById("square2").textContent;
    b4 = document.getElementById("square3").textContent;
    b5 = document.getElementById("square4").textContent;
    b6 = document.getElementById("square5").textContent;
    b7 = document.getElementById("square6").textContent;
    b8 = document.getElementById("square7").textContent;
    b9 = document.getElementById("square8").textContent;
    // Checking if Player X won or not

    if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b1 == 'X' && b4 == 'X' &&  b7 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b3 == 'X' && b6 == 'X' && b9 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if ( b1 == 'X' && b5 == 'X' && b9 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b3 == 'X' && b5 == 'X' && b7 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b2 == 'X' && b5 == 'X' && b8 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X') {
        document.getElementById('status').textContent = "Congratulations! X is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }

    // Check if Player X finish
    // Checking for Player 0 starts, player 0 won or not
    else if ( b1 == 'O' && b2 == 'O' && b3 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }
    else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
        document.getElementById('status').textContent = "Congratulations! O is the Winner!";
        document.getElementById('status').classList.add("you-won");
    }

    // Checking if Player 0 finish
    // Checking Tie
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
        b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
        b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
            document.getElementById('status').innerHTML = "Match Tie";
            window.alert('Match Tie');
    }
    else {

        if (gamestatus[gamestatus.length-1] == "X") {
            document.getElementById('status').innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('status').innerHTML = "Player O Turn";
        }
}
}



gamestatus = [];



function makeMove(){
if (document.getElementById('status').textContent == "Congratulations! O is the Winner!" || document.getElementById('status').textContent == "Congratulations! X is the Winner!"){
    window.alert("Game Over!");
  }
  else if(document.getElementById('status').textContent == "Match Tie"){
    window.alert("Match Tie!");
  }
  else{
    if(event.target.textContent=='X'||event.target.textContent=='O'){
      document.getElementById('status').innerHTML = "Try a different move";
    }else{
      if(gamestatus[gamestatus.length-1]==="X"){
        event.target.classList.add("O");
        event.target.textContent = "O";
        gamestatus.push("O");
      }
      else if(gamestatus[gamestatus.length-1]==="O"){
        event.target.classList.add("X");
        event.target.textContent = "X";
        gamestatus.push("X");
      }
      else{
        event.target.classList.add("X");
        event.target.textContent = "X";
        gamestatus.push("X");

      }
    }
  }


}

function addHover(){
  event.target.classList.add("hover");
}
function removeHover(){
  event.target.classList.remove("hover");
}

document.addEventListener('DOMContentLoaded', () => {
            let btn = document.body.getElementsByClassName('btn')[0];
            btn.addEventListener('click', () => {
                // handle the click event
                const squares = document.getElementById("board").querySelectorAll("div");

                for (square of squares){
                  square.classList.add('square');
                  square.addEventListener("click",myfunc);
                  square.addEventListener("click",makeMove);
                  square.addEventListener("mouseover",addHover);
                  square.addEventListener("mouseout",removeHover);
                }

                for(var i=0;i<squares.length;i++){
                  squares[i].setAttribute("id","square"+i);
                }


                btn.addEventListener('click',newGame);
            });
        });

function newGame() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.textContent='';
      square.classList.remove("X","O");
    });


    document.getElementById("status").textContent = 'Move your mouse over a square and click to play an X or an O.';
    document.getElementById("status").classList.remove("you-won");
    gamestatus = [];

}
