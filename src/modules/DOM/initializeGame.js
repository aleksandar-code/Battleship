import { printBoards, printShips } from "./printBoard";
import Game from "../game";

const newGame = new Game();
newGame.gameLoop();
printBoards();
printShips(newGame.boards);

function dragAndDrop() {
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];

  playersShips.forEach((arr, index) => {
    arr.forEach((_, i) => {
      arr[i].setAttribute("draggable", true);

      const ship = playersShips[index][i];
      ship.ondragstart = (e) => {
        e.preventDefault();
      };

      ship.onmousedown = () => {
        function moveAt(pageX, pageY) {
          ship.style.left = `${pageX - ship.offsetWidth / 2}px`;
          ship.style.top = `${pageY - ship.offsetHeight / 2}px`;
        }

        function onMouseMove(event2) {
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;
          if (ship.classList.contains("rotated"))
            ship.style.transform = "rotate(90deg)";
          document.body.append(ship);
          moveAt(event2.pageX, event2.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        ship.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);
          ship.onmouseup = null;
        };
      };
    });
  });
}

(function rotateShips() {
  const realPlayerShips = Object.values(newGame.boards[0].ships);
  const realComputerShips = Object.values(newGame.boards[1].ships);
  const playerShips = document.querySelectorAll(".player .ship");
  const computerShips = document.querySelectorAll(".computer .ship");
  const playersShips = [Array.from(playerShips), Array.from(computerShips)];
  const realPlayersShips = [realPlayerShips, realComputerShips];
  dragAndDrop();
  playersShips.forEach((arr, i) => {
    arr.forEach((element) => {
      element.addEventListener("click", () => {
        const index = element.classList[0][1] - 1;
        newGame.boards[i].changeAxis(realPlayersShips[i][index]);
        printBoards();
        printShips(newGame.boards);
        rotateShips();
        dragAndDrop();
      });
    });
  });
})();
