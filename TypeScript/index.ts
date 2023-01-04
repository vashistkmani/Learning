// interface Product {
//     id: number,
//     name: string,
//     price: number
// };

// function getProduct(id: any): Product {
//     return {
//         id: id,
//         name: `Awesome Gadget ${id}`,
//         price: 100
//     }
// }

// const product = getProduct("1");
// console.log(`The product ${product.name} costs $${product.price}`);
// console.log("hello".toLocaleUpperCase())

// let counter: string[];
// counter = ["Mani", "Rupak"];
// console.log(typeof counter, counter);


// let str: string = "Hello World";
// console.log(str)

// var str: number;
// str = 10;
// console.log(str);


// let names: readonly any[];
// names = ['10', 10];
// console.log(names)

// let tuple: [any, boolean, number] = [null, true, 22,];
// console.log(tuple)

// let car: { type: string, mileage: number };
// car = {
//     type: "Swift",
//     mileage: 0
// };

// console.log(car)

// const nameAgeMap: { [index: string]: [any] } = {};
// nameAgeMap.age = [25];
// nameAgeMap.mark = ["Second"];
// nameAgeMap.height = [55];

// console.log(nameAgeMap)


// enum CardinalDirections {
//     North = 3,
//     East,
//     South,
//     West=8
// }
// let currentDirection = CardinalDirections.North;
// // logs 0
// console.log(currentDirection);
// // throws error as 'North' is not a valid enum
// // currentDirection = 2; // Error: "North" is not assignable to type 'CardinalDirections'.
// console.log( CardinalDirections.West);
// console.log( CardinalDirections.South);

type name = string;
type age = number | string;
type address = string;
type contactNo = number;

// type person = { Name: name, Age: age, Address: address, Contact: contactNo }

// const person: person = {
//     Name: 'Mani',
//     Age: 22,
//     Address: "Patna",
//     Contact: 8863853552
// };

// console.log(person);


// interface Person { Name: name, Age: age, Address: address, Contact: contactNo };
// const person: Person = {
//     Name: 'Mani',
//     Age: 22,
//     Address: "Patna",
//     Contact: 8863853552
// };
// console.log(person);


// interface PersonalDetails extends Person {
//     Email: string,
//     Position: string
// };

// const personDetails: PersonalDetails = {
//     Name: 'Mani',
//     Age: "22",
//     Address: "Patna",
//     Contact: 8863853552,
//     Email: "vashistkumarmani@gmail.com",
//     Position: "Developer"
// };
// console.log(personDetails);

// function getTime(): string | number | void {
//     return new Date().getTime();
// }

// console.log(getTime());

// function multiply(a: number, b: number) {
//     return a * b
// };

// console.log(multiply(4, 5));

// function add(a: number, b: number, c: number = 10) {
//     return a + b + c;
// }

// console.log(add(2, 3))

// function divide({ divident, divisor }: { divident: number, divisor: number }) {
//     return divident / divisor;
// };

// console.log(divide({ divident: 10, divisor: 2 }));

// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c, 0);
// };

// console.log(add(2, 3, 4, 5, 6, 7, 8));

// let x = 124567890;
// console.log(((x as unknown) as string).length);

// class Person {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     getName(): string {
//         console.log("Inside Get Name", this.name)
//         return this.name;
//     }
// }

// const person = new Person("Jane");
// console.log(person.getName()); 

// class Person {
//     private readonly name: string;

//     public constructor(name: string) {
//         // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
//         this.name = name;
//     }

//     public getName(): string {
//         return this.name;
//     }

//     public setName(changeName: string): void {
//         this.name = changeName
//     };
// }

// const person = new Person("Jane");
// console.log(person.getName());

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number, protected total: number) { }

//     public getArea(): number {
//         return this.width * this.height;
//     }

//     public setArea(): number {
//         this.total = this.width + this.height;
//         return this.total;
//     }
// };

// const newReactangle = new Rectangle(12, 12, 0);
// console.log(newReactangle.getArea());
// console.log(newReactangle.setArea());

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) { }

//     public getArea(): number {
//         return this.width * this.height;
//     }
// }

// class Square extends Rectangle {
//     public constructor(width: number) {
//         super(width, width);
//     }

//     // getArea gets inherited from Rectangle
// }


abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}


const newRectangle = new Rectangle(12, 15);
console.log(newRectangle.getArea());
console.log(newRectangle.toString());
