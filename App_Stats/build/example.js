"use strict";
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// add(10, 1);
// add(10, 2);
// add(10, 3);
// class HoldNumber {
//   data: number = 0;
// }
// class HoldString {
//   data: string = "0";
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 333;
// const hildString = new HoldString();
// hildString.data = "asdds";
// class HoldAnything<TypeOfData> {
//   data: TypeOfData;
// }
// const holdNumber = new HoldAnything<number>();
// holdNumber.data = 55;
// const holdString = new HoldAnything<string>();
// holdString.data = "asdfasdf";
// Composition misconception
// const rectangular = (state) => {
//   return {
//     area: () => {
//       return state.heigth * state.width;
//     },
//   };
// };
// const openable = (state) => {
//   return {
//     toggleOpen: () => {
//       state.open = !state.open;
//     },
//   };
// };
// const buildRectangleWindow = (state) => {
//   return Object.assign(state, rectangular(state), openable(state));
// };
// const rectangleWindow = buildRectangleWindow({
//   heigth: 30,
//   width: 20,
//   open: false,
// });
