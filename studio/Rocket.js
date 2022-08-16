"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    // constructor
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //methods
    Rocket.prototype.sumMass = function (items) {
        // Returns the sum of all items using each item's massKg property
        var weightOfPayloads = 0;
        for (var i = 0; i < items.length; i++) {
            weightOfPayloads += items[i].massKg;
        }
        return weightOfPayloads;
    };
    Rocket.prototype.currentMassKg = function () {
        var combinedMass = 0;
        combinedMass =
            this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return combinedMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            // If false, returns false.
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // Uses this.canAdd() to see if another item can be added.
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            // If false, returns false.
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
