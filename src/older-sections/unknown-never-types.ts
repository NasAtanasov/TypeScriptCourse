let userInput: unknown;
let userNamestr: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userNamestr = userInput;
}

function generateError(message:string, code: number): never {
    throw {message: message, errorCode: code};
    //while(true){}
}

const result1 = generateError('An error Occurred!', 500);
console.log(result1);