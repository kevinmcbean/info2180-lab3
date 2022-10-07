

document.addEventListener('DOMContentLoaded', () => {
            let btn = document.body.getElementsByClassName('btn')[0];
            btn.addEventListener('click', () => {
                // handle the click event
                const squares = document.getElementById("board").querySelectorAll("div");

                for (square of squares){
                  square.classList.add('square');
                }
            });
        });
