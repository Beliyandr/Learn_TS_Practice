import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    // метод который будет сравнивать элементы и возвращать (true/false), для проверки нужно ли менять элементы метами
    return this.data[leftIndex] > this.data[rigthIndex];
  }

  swap(leftIndex: number, rigthIndex: number): void {
    // метод который ничего не возвращет, а только меняем местами элементы в  числовом массиве
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rigthIndex];
    this.data[rigthIndex] = leftHand;
  }
}
