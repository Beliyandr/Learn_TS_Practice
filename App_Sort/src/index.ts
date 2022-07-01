//! Охрана типов - Type Guard /////////////////   
//? 1. // охрана типов (this.collection instanceof Array) // для массивов - проверяет на тип данных (массив) и устанавливает нужные свойства присущи данногму типу
//? 2. // охрана типов (typeof this.collection === 'string') // для строк - проверяет на тип данных (строка) и устанавливает нужные свойства присущи данногму типу
//?    // typeof - применяется для проверки приметивных типов [ 'number', 'string', 'boolean', 'symbol']
//?    // instanceof - сужает все остальные типаы значений  --> ( Любое другое значение, созданное с помощью функции-конструктора )
//! /////////////////////////////

class Sorter {
  //   collection: number[];
  //   constructor(collection: number[]) {
  //     this.collection = collection;
  //   }

  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //
        //if collection is an array of numbers
        // охрана типов (this.collection instanceof Array) // для массивов - проверяет на тип данных (массив) и устанавливает нужные свойства присущи данногму типу

        if (this.collection instanceof Array) {
          // collection has type of number[]
          if (this.collection[j] > this.collection[j + 1]) {
            let leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // if collection is a string
        // some logic for string
        //typeof - применяется для проверки приметивных типов [ 'number', 'string', 'boolean', 'symbol']
        // охрана типов (typeof this.collection === 'string') // для строк - проверяет на тип данных (строка) и устанавливает нужные свойства присущи данногму типу
        if (typeof this.collection === 'string') {


      }
    }
  }
}
}
const sorter = new Sorter([5, -3, 11, -29, 12]);
// sorter.sort();

// console.log(sorter.collection);
