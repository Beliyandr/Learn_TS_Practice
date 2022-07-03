"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rigthIndex) {
        // метод который будет сравнивать элементы и возвращать (true/false), для проверки нужно ли менять элементы метами
        return this.data[leftIndex] > this.data[rigthIndex];
    }
    swap(leftIndex, rigthIndex) {
        // метод который ничего не возвращет, а только меняем местами элементы в  числовом массиве
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rigthIndex];
        this.data[rigthIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
