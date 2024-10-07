export class Ship {
    #length
    #health
    #sunk

    constructor(length) {
        this.#length = length;
        this.#health = length;
        this.#sunk = false;
    };

    hit() {
        if (this.#health === 0) {
            this.#sunk = true;
            return;
        };

        this.#health -= 1;

        return;
    };

    isSunk() {
        return this.#sunk;
    };

    reset() {
        this.#health = this.#length;
        this.#sunk = false;
    };

    get health() {
        return this.#health;
    };

    
    get length() {
        return this.#length;
    };
};