// const names: Array<string> = [];
// // names[0].split('');
//
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log({name: 'Max'}, {age: 30});

// const mergeObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number};
// mergeObj.age;

const mergeObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30});
console.log(mergeObj.age);
console.log(mergeObj.name);
console.log(mergeObj.hobbies);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}

console.log(countAndDescribe(''));
console.log(countAndDescribe(['123', '123', '123']));
console.log(countAndDescribe('H'));
console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));

// class DataStorage<T extends string | number | boolean> {
//     private data: T[] = [];

//     addItem(item: T) {
//         this.data.push(item);
//     }

//     removeItem(item: T) {
//         if (this.data.indexOf(item) === -1) {
//             return;
//         }
//         this.data.splice(this.data.indexOf(item), 1); //-1
//     }

//     getItems() {
//         return [...this.data];
//     }
// }

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); //-1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
textStorage.addItem('Mad Max');

console.log(textStorage.getItems());


const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
numberStorage.addItem(3);

console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// const manuObj = { name: 'Manu' };
// objectStorage.addItem(maxObj);
// objectStorage.addItem(manuObj);
// objectStorage.removeItem(manuObj);

// console.log(objectStorage.getItems());


interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    completeUntil: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();