import { Sort } from './main.js';

export class BubbleSort extends Sort {
    constructor() {
        super();
    }

    bubbleSort(array) {
        let len = array.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
}