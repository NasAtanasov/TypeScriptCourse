class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
    }

    get Name(): string {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    get Age(): number {
        return this.age;
    }

    set Age(value: number) {
        this.age = value;
    }

}

const person = new Person('Nas', 40);
console.log(person);