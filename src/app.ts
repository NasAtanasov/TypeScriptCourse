// function Logger(constructor: Function) {
//     console.log('Loading...');
//     console.log(constructor)
// }

function Logger(logString: string) {
    console.log('LOGGER FACTORY')
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template:string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    return function<T extends {new (...args: any[]): {name: string}}>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template')
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

//@Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();

console.log(pers);

// --
console.log('-------------------------------------------')

function Log1(target: any, propertyName: string | Symbol) {
    console.log('Property decorator! 1');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator! 2');
    console.log(target);
    console.log(name);
    console.log(descriptor);

}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Method decorator! 3');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator! 4');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log1
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTAx(@Log4 tax: number) {
        return this._price * (1+ tax);
    }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 21);