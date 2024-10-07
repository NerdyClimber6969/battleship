// import test, { afterEach } from "node:test";
import { Ship } from "./Ship.js";
import { Gameboard } from "./Gameboard.js";

const battleShip = new Ship(4);
const gameboard = new Gameboard();

afterEach(() => {
    gameboard.reset();
    battleShip.reset()
});

test("test hit method when it is called once", () => {
    battleShip.hit();
    expect(battleShip.numHit).toBe(1);
});

test("test hit method when it is call number of times larger than its length", () => {

    for (let i = 0; i < battleShip.length + 1; i++) {
        battleShip.hit();
    };

    expect(battleShip.numHit).toBe(4);
});


test("test if the ship is sunk after it is hit once", () => {
    battleShip.hit();
    expect(battleShip.isSunk()).toBe(false);
});

test("test if the ship is sunk when it is hit number of time larger than its length", () => {

    for (let i = 0; i < battleShip.length + 1; i++) {
        battleShip.hit();
    };

    expect(battleShip.isSunk()).toBe(true);
});

test("test placing ship of length of 4 0,0 and 1,0 and 2,0", () => {
    const result = Array.from(Array.from(new Array(10), (row) => row = new Array(10).fill(0)))
    
    for (const row of [0, 1, 2]) {
        for (let i = 0; i < 4; i++) {
            result[row][i] = battleShip
        };
    }

    gameboard.placeShip(0, 0, 4);
    gameboard.placeShip(1, 0, 4);
    gameboard.placeShip(2, 0, 4);

    expect(gameboard.board).toEqual(result);
});

test("test placeShip method when the cooridinate is occupied", () => {
    const result = Array.from(Array.from(new Array(10), (row) => row = new Array(10).fill(0)))
    
    for (let i = 0; i < battleShip.length; i++) {
        result[0][i] = battleShip
    };
    gameboard.placeShip(0, 0, 4);

    gameboard.placeShip(0, 0, 4);
    gameboard.placeShip(0, 1, 4);
    gameboard.placeShip(0, 2, 4);
    gameboard.placeShip(0, 3, 4);

    expect(gameboard.board).toEqual(result);
})

test("test receiveAttack when ship is hit", () => {
    gameboard.placeShip(0, 0, 4);
    gameboard.receiveAttack(0, 0);
    const board = gameboard.board;

    expect(board[0][0].numHit).toBe(1);
    expect(board[0][1].numHit).toBe(1);
    expect(board[0][2].numHit).toBe(1);
    expect(board[0][3].numHit).toBe(1);
});

test("test receiveAttack when ship is not hit", () => {
    const result = Array.from(Array.from(new Array(10), (row) => row = new Array(10).fill(0)))
    
    for (let i = 0; i < battleShip.length; i++) {
        result[0][i] = battleShip
    };

    result[0][5] = 1;

    gameboard.placeShip(0, 0, 4);
    gameboard.receiveAttack(0, 5);

    expect(gameboard.board).toEqual(result);
});

test("all ship are sunk", () => {
    gameboard.placeShip(0, 0, 4);
    gameboard.placeShip(1, 0, 4);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            gameboard.receiveAttack(i, j);
        };
    };

    expect(gameboard.areAllSunk()).toBe(true);
});

test("not all ship are sunk", () => {
    gameboard.placeShip(0, 0, 4);
    gameboard.placeShip(1, 0, 4);

    for (let i = 0; i < 10; i++) {
        gameboard.receiveAttack(0, i)
    };

    expect(gameboard.areAllSunk()).toBe(false);
});