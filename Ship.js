export class Ship {
    #length
    #numHit
    #sunk

    constructor(length) {
        this.#length = length;
        this.#numHit = 0;
        this.#sunk = false;
    };

    hit() {
        if (this.#numHit >= this.#length) {
            this.#sunk = true;
            return;
        };

        this.#numHit += 1;

        return;
    };

    isSunk() {
        return this.#numHit === this.#length ? true : false;
    };

    reset() {
        this.#numHit = 0;
        this.#sunk = false;
    };
 
    get numHit() {
        return this.#numHit;
    };
    
    get length() {
        return this.#length;
    };
};