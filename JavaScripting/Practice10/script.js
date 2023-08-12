
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, regNo, fuelType) {
        super(make, model);
        this.regNo = regNo;
        this.fuelType = fuelType;
    }
    getDetails() {
        document.write(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
    }
}

let cObj1 = new Car("Hundai", " i10 ", " KA01-6447 ", " Petrol");
cObj1.getDetails();

//Subclassing Built-ins

//To display the array items, the built-in Array class can be extended as mentioned below.

class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}

	display() {
		let strItems = "";
		for (let val of this) {
			strItems += `${val} `;
		}
		
        document.write('<hr color="red" size="2" width="100%">');
        document.write(strItems);
		return strItems;
	}
}

let letters = new MyArray("Sam", "Jack", "Tom");
letters.display();
