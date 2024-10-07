// import test, { afterEach } from "node:test";
import { Ship } from "./Ship.js";

const battleShip = new Ship(4)
afterEach(() => battleShip.reset());

test("test hit method when it is called once", () => {
    battleShip.hit();
    expect(battleShip.health).toBe(3);
});

test("test hit method when it is call number of times larger than its length", () => {

    for (let i = 0; i < battleShip.length + 1; i++) {
        battleShip.hit();
    };

    expect(battleShip.health).toBe(0);
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






