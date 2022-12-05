class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return "Beeeeeep!";
    }

    toString () {
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    numWheels () {
        return 4;           // solution puts this as a property in the constructor
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
    }
    numWheels(){
        return 2;           // solution puts this as a property in the constructor
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle) {
        if (this.vehicles.length >= this.capacity) {
            throw Error("Sorry, we're full.");
        }
        // if (newVehicle.constructor.name !== Vehicle) {
        //     throw Error("Only vehicles are allowed in here!")
        // }
        if (!(newVehicle instanceof Vehicle)){
            throw Error("Only vehicles allowed in here!")
        }
        this.vehicles.push(newVehicle);
        return this.vehicles;
    }
}
