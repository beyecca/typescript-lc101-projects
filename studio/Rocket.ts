import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
  // properties
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  // constructor
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  //methods
  sumMass(items: Payload[]): number {
    // Returns the sum of all items using each item's massKg property
    let weightOfPayloads: number = 0;

    for (let i = 0; i < items.length; i++) {
      weightOfPayloads += items[i].massKg;
    }
    return weightOfPayloads;
  }

  currentMassKg(): number {
    let combinedMass: number = 0;
    combinedMass =
      this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    return combinedMass;
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    // Uses this.canAdd() to see if another item can be added.
    if (this.canAdd(cargo)) {
      // If true, adds cargo to this.cargoItems and returns true.
      this.cargoItems.push(cargo);
      return true;
    } else {
      // If false, returns false.
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    // Uses this.canAdd() to see if another item can be added.
    if (this.canAdd(astronaut)) {
      // If true, adds astronaut to this.astronauts and returns true.
      this.astronauts.push(astronaut);
      return true;
    } else {
      // If false, returns false.
      return false;
    }
  }
}
