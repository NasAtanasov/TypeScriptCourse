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

const person = {
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

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
    console.log(hobby);
}
// for (const roles of person.role) {
//     console.log(roles);
// }

if (person.role === Role.AUTHOR) {
    console.log('is admin');
}