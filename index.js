import { Gameboard } from "./Gameboard.js"

const gameboard = new Gameboard();

gameboard.placeShip(0, 0, 4);
gameboard.placeShip(1, 0, 4);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        gameboard.receiveAttack(i, j);
    };
};

console.log(gameboard.areAllSunk())