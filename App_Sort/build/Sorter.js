"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//! создаем interface Sortable - т.е. инструкции (как быть аргументом в конструкторе класса Sortable, то есть иметь возможность быть отсортированным при помощи нашего класса Sorter  )
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rigthIndex: number): boolean;
//   swap(leftIndex: number, rigthIndex: number): void;
// }
//! т.к. используется абстрактный класс, интерфейс стал не нужным!
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
