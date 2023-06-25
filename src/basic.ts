function addBasicTs (n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof number1)
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    let result = n1 + n2;
    if (showResult) {
        return console.log(phrase + result);
    } else {
        return result;
    }
}
let number1 : number;
let number2 : number;
number1 = 5;
number2 = 2.8;
const printResultBasicTs = true;
const resultPhrase = 'Result is: ';

const resultBasicTs = addBasicTs(number1, number2, printResultBasicTs, resultPhrase);
console.log(printResultBasicTs);
