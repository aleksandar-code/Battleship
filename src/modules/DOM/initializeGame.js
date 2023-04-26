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
      const fakeShip = ship.cloneNode(false);
      ship.ondragstart = (e) => {
        e.preventDefault();
      };

      fakeShip.ondragstart = (e) => {
        e.preventDefault();
      };

      let onMouseMove;

      function showOutline(a, b) {
        const result = document.elementsFromPoint(a, b);
        const array = Array.from(result);

        array.forEach((element) => {
          if (element.classList.contains("slot")) {
            fakeShip.style.border = "3px solid red";
            element.appendChild(fakeShip);
            fakeShip.style.top = "0";
            fakeShip.style.left = "0";
          }
        });
      }

      ship.onmousedown = () => {
        function moveAt(pageX, pageY) {
          fakeShip.style.left = `${pageX - ship.offsetWidth / 2}px`;
          fakeShip.style.top = `${pageY - ship.offsetHeight / 2}px`;
          ship.style.left = `${pageX - ship.offsetWidth / 2}px`;
          ship.style.top = `${pageY - ship.offsetHeight / 2}px`;

          showOutline(
            pageX - fakeShip.offsetWidth / 2,
            pageY - fakeShip.offsetHeight / 2
          );
        }

        ship.style.border = "none";
        onMouseMove = (event2) => {
          ship.style.position = "absolute";
          ship.style.zIndex = 1000;
          document.body.append(ship);
          document.body.append(fakeShip);

          moveAt(event2.pageX, event2.pageY);
        };

        document.addEventListener("mousemove", onMouseMove);

        ship.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);

          ship.style.border = "3px solid yellow";
          ship.style.left = "0";
          ship.style.top = "0";
          try {
            fakeShip.parentNode.replaceChild(ship, fakeShip);
          } catch (error) {
            console.log(error);
          }
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
        console.log(realPlayersShips[i][index]);
        printBoards();
        printShips(newGame.boards);
        rotateShips();
        dragAndDrop();
      });
    });
  });
})();

// add ship coordinates into the ship object based on the rotation of the ship and the place of its head on the board.
// handle display errors for ships on the board, then start implementing hits
