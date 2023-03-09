import { BubbleSort } from "./bubblesort";

export class Sort {
    constructor() {
        this.array = [];
    }

    setArray(array) {
        this.array = array;
    }

    getArray() {
        return this.array;
    }
}

const length = prompt("Enter the length of the array: ");

function generateRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}
console.log(Sort.BubbleSort.bubbleSort(generateRandomArray(length)));