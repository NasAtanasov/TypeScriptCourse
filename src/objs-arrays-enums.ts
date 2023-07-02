// const person: {
//     name: string
//     age: number
// } = {

// {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//   } =

// const ADMIN = 0;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person2 = {
    name: "NasA",
    age: 30,
    hobbies: ['Gaming', 'Coding'],
    role: Role.ADMIN
};

//person.role.push('admin');
//person.role[1] = 10;
//person.role = [0, 'admin', 'user']

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1];

console.log(person2.name);
console.log(person2.age);

for (const hobby of person2.hobbies) {
    console.log(hobby);
}
// for (const roles of person.role) {
//     console.log(roles);
// }

if (person2.role === Role.AUTHOR) {
    console.log('is admin');
}