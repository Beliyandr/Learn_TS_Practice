interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const cola = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams if sugar`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Yaer: ${vehicle.year}`);
//   console.log(`Broken : ${vehicle.broken}`);
// };
const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Yaer: ${vehicle.year}`);
  //   console.log(`Broken : ${vehicle.broken}`);
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(cola);
