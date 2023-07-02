console.log('app.ts');

const userName = 'Max';

let age = 30;

age = 29;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

const add3 = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add3(26));

const hobbies = ['Sports', ' Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = {...person};
console.log(copiedPerson);

const arrayPerson = [copiedPerson];
console.log(arrayPerson);

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);