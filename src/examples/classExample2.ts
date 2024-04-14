enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

class Person2 {
    private name: string;
    private age: number;
    private gender: Gender;

    constructor(pName: string, pAge: number, pGender: Gender = Gender.other) {
        if (pName.trim() === '') {
            throw new Error('Name cannot be an empty string');
        }
        if (pAge <= 0) {
            throw new Error('Age cannot be < 0');
        }
        this.name = pName;
        this.age = pAge;
        this.gender = pGender;
    }

    get personInfo(): { pName: string, pAge: number, pGender: Gender } {
        return {
            pName: this.name,
            pAge: this.age,
            pGender: this.gender
        };
    }

    set personInfo(value: { name: string, age: number, gender: Gender }) {
        this.name = value.name;
        this.age = value.age;
        this.gender = value.gender;
    }
}

try {
    const personName = new Person2('Nas', 40);
    const personAge = new Person2('a', 12);
    const personGender = new Person2('b', 1, Gender.male);

    console.log(personName);
    console.log(personAge);
    console.log(personGender);
} catch (error: any) {
    console.error(error.message);
}