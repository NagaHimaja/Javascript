
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, roll, contact) {
        super(name, age);
        this.roll = roll;
        this.contact = contact;
    }
    display() {
        document.write('<h4><u>Student Details:</u></h4>');
        document.write(`<p>Name: ${this.name} <br> Age: ${this.age}<br> Roll No: ${this.roll}<br> Contact No: ${this.contact}</p><br>`);
    }
}

var emp = new Employee('Himaja', 19, '208w1a05c8', '8919164238');
emp.display();
