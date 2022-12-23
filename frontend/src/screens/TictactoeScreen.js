import { getUserInfo } from "../localStorage";
import { showMessage } from "../utils";

const Tictactoe = {
    after_render: ()=>{

        const X_CLASS = "X";
        const O_CLASS = "O";
        let O_TURN;
        let moves = 9;
        const nextPlayer = document.getElementById("next-player");
        const moveCount = document.getElementById("move-count");
        const restartButton = document.getElementById("reset");
        const button = document.querySelectorAll(".box");
        const winningMessageTextElement = document.getElementById(
            "winner-display-board"
        );
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const play = (event) => {
            const cell = event.target;
            const currentClass = O_TURN ? O_CLASS : X_CLASS;
            moves--;
            console.log("click");
            // renders text on button clicked with X or O
            render(cell, currentClass);

            if (checkWin(currentClass)) {
                console.log("win");
                if(currentClass=="X")
                    showMessage("whoo! Player X wins");
                else
                    showMessage("whoo! Player Y wins");
                button.forEach((button) => {
                    button.removeEventListener("click", play);
                });

                endGame(false);
            } else if (isDraw()) {
                endGame(true);
            } else {
                swapTurns();
            }
            // update panel values such as Turn Played By and Moves Left
            moveCount.innerText = `Moves Left: ${moves}`;
        };

        function endGame(draw) {
            if (draw) {
                winningMessageTextElement.innerText = "Draw!";
            } else {
                winningMessageTextElement.innerText = `${O_TURN ? "O's" : "X's"} Wins!`;
            }
            winningMessageTextElement.style.display = "block";
        }

        function isDraw() {
            return [...button].every((cell) => {
                return cell.innerHTML === X_CLASS || cell.innerHTML === O_CLASS;
            });
        }

        function checkWin(currentClass) {
            return winningCombinations.some((combination) => {
                return combination.every((index) => {
                    return button[index].innerHTML === currentClass;
                });
            });
        }

        function swapTurns() {
            nextPlayer.innerText = `Turn Played By: ${O_TURN ? "X" : "O"}`;
            O_TURN = !O_TURN;
        }

        function render(cell, currentClass) {
            cell.innerHTML = currentClass;
        }

        const reset = () => {
            button.forEach((button) => {
                button.innerHTML = "";
                button.addEventListener("click", play, { once: true });
            });
            winningMessageTextElement.style.display = "none";
            moveCount.innerText = `Moves Left: ${(moves = 9)}`;
        };
        // REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state
        // reset game to start a new
        restartButton.addEventListener("click", reset);
        // bind events to clickable buttons
        function enableButtons() {
            button.forEach((button) => {
                button.addEventListener("click", play, { once: true });
            });
        }

        enableButtons();

    },
    render: ()=>{
        const {name,TictactoeScore} = getUserInfo();
        return `
            <div class="container playground" onload="enableButtons()">
                <div class="heading-tic-tac-toe"><h1>TIC-TAC-TOE GAME</h1></div>
                <div class="row control-board">
                    <label id="next-player" >Turn Played By: ---- </label>
                    <label id="move-count" >Moves Left: 9</label>
                    <button id="reset" >Restart Game</button>
                </div>
                <div id="winner-display-board"></div>
                <div id="tictactoe-main" >
                    <div class="container-fluid" id="field" >
                        <div class="box-row row-1">
                            <div class="box-wrapper"><button class="box enabled" id="box-1"></button></div>
                            <div class="box-wrapper"><button class="box enabled" id="box-2"></button></div>
                            <div class="right-box-wrapper"><button class="box enabled" id="box-3"></button></div>
                        </div>
                        <div class="box-row row-2">
                            <div class="box-wrapper"><button class="box enabled" id="box-4"></button></div>
                            <div class="box-wrapper"><button class="box enabled" id="box-5"></button></div>
                            <div class="right-box-wrapper"><button class="box enabled" id="box-6"></button></div>
                        </div>
                        <div class="box-last-row row-3">
                            <div class="box-wrapper"><button class="box enabled" id="box-7"></button></div>
                            <div class="box-wrapper"><button class="box enabled" id="box-8"></button></div>
                            <div class="right-box-wrapper"><button class="box enabled" id="box-9"></button></div>
                        </div>
                    </div>
                    <div id="tictactoe-user-scores">
                        ${name?
                            `<h3> UserName:  ${name}</h3>`:''
                        }
                    </div>
                </div>
                
            </div>
        `;
    }
};

export default Tictactoe;