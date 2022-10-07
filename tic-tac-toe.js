
gamestatus = [];

function makeMove(){
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
else if(gamestatus[gamestatus.length-1]==="XWON"){
  alert("X WON!");
}
else if(gamestatus[gamestatus.length-1]==="OWON"){
  alert("O WON!");
}
else{
  event.target.classList.add("X");
  event.target.textContent = "X";
  gamestatus.push("X");

}
}

document.addEventListener('DOMContentLoaded', () => {
            let btn = document.body.getElementsByClassName('btn')[0];
            btn.addEventListener('click', () => {
                // handle the click event
                const squares = document.getElementById("board").querySelectorAll("div");

                for (square of squares){
                  square.classList.add('square');
                  square.addEventListener("click",makeMove)
                }
            });
        });
