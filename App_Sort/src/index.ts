//! Охрана типов - Type Guard /////////////////
//? 1. // охрана типов (this.collection instanceof Array) // для массивов - проверяет на тип данных (массив) и устанавливает нужные свойства присущи данногму типу
//? 2. // охрана типов (typeof this.collection === 'string') // для строк - проверяет на тип данных (строка) и устанавливает нужные свойства присущи данногму типу
//?    // typeof - применяется для проверки приметивных типов [ 'number', 'string', 'boolean', 'symbol']
//?    // instanceof - сужает все остальные типаы значений  --> ( Любое другое значение, созданное с помощью функции-конструктора )
//! /////////////////////////////

//********************************************************************************************************************************** */

/*
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
*/

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([5, 111, 50, -29, 12]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Zxbndta");
const sorter1 = new Sorter(charactersCollection);

sorter1.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-100);
linkedList.add(10);
linkedList.add(15);
linkedList.add(-5);

const sorter2 = new Sorter(linkedList);

sorter2.sort();
linkedList.print();
