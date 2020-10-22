export class Employee {


    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get x() {
        return this.firstName;
    }
    set x(y) {
        this.firstName = y;
    }
}

let employee = new Employee('abcd','xyz');
console.log(employee.x);