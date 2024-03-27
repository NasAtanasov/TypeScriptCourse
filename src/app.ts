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

function merge<T extends object, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

console.log({name: 'Max'}, {age: 30});

// const mergeObj = merge({name: 'Max'}, {age: 30}) as {name: string, age: number};
// mergeObj.age;

const mergeObj = merge({name: 'Max', hobbies: ['Sport']}, {age: 30});
console.log(mergeObj.age);
console.log(mergeObj.name);
console.log(mergeObj.hobbies);