"use strict";
//! Охрана типов - Type Guard /////////////////
//? 1. // охрана типов (this.collection instanceof Array) // для массивов - проверяет на тип данных (массив) и устанавливает нужные свойства присущи данногму типу
//? 2. // охрана типов (typeof this.collection === 'string') // для строк - проверяет на тип данных (строка) и устанавливает нужные свойства присущи данногму типу
//?    // typeof - применяется для проверки приметивных типов [ 'number', 'string', 'boolean', 'symbol']
//?    // instanceof - сужает все остальные типаы значений  --> ( Любое другое значение, созданное с помощью функции-конструктора )
//! /////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([5, 111, 50, -29, 12]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// const charactersCollection = new CharactersCollection("Zxbndta");
// charactersCollection.sort();
// console.log(charactersCollection);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-100);
linkedList.add(10);
linkedList.add(15);
linkedList.add(-5);
linkedList.sort();
linkedList.print();
