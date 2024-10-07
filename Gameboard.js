import { Ship } from "./Ship.js";

export class Gameboard {
    #board;
    #ships;

    constructor() {
        this.#board = Array.from(new Array(10), (row) => row = new Array(10).fill(0));
        this.#ships = [];
    };

    placeShip(x, y, shipLength) {
        const ship = new Ship(shipLength);
        
        if (this.#board[x][y] instanceof Ship || this.#board[x][y] === 1) return;

        for (let i = y; i < ship.length + y; i++) {
            this.#board[x][i] = ship;
        };

        this.#ships.push(ship);

        return;
    };

    receiveAttack(x, y) {
        if (this.#board[x][y] instanceof Ship) {
            this.#board[x][y].hit();
        } else {
            this.#board[x][y] = 1;
        };

        return;
    };

    areAllSunk() {
        const sunkShips = this.#ships.filter((ship) => ship.isSunk());
        return sunkShips.length === this.#ships.length;
    };

    reset() {
        this.#board = Array.from(new Array(10), (row) => row = new Array(10).fill(0));
        this.#ships = [];
    };


    get board() {
        return this.#board;
    };
};

