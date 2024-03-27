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
