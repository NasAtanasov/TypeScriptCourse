type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// interface ElevateEmployee extends Employee, Admin {}

type ElevateEmployee = Admin & Employee;

const e1: ElevateEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add(1, 5);
const result2 = add('Max', 'Moritz');

console.log(result2.split('', 3));

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};

console.log(fetchedUserData?.job?.title);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges)
//     }
//     if ('startDate' in emp) {
//         console.log('Star Date: ' + emp.startDate)
//     }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({name: 'Manu', startDate: new Date()});

// console.log(add(1,'2'))

// class Car {
//     drive() {
//         console.log('Driving...')
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving...')
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo: ' + amount);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving with speed: ' + speed)

//     // if ('flyingSpeed' in animal) {
//     //     console.log('Moving with speed: ' + animal.flyingSpeed);
//     // }
//     // if ('runningSpeed' in animal) {
//     //     console.log('Moving with speed: ' + animal.runningSpeed)
//     // }
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const paragraph = document.querySelector('p');
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//     (userInputElement as HTMLInputElement).value = 'Hi, there!';
// }

// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a capital character' }
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character'
// };