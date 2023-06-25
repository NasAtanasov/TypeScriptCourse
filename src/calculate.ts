function calculateTwoNumbers(n1: number, n2: number) {
    let number1 = document.getElementById("quantity1") as HTMLInputElement;
    let number2 = document.getElementById("quantity2") as HTMLInputElement;
    let result = document.getElementById("result") as HTMLInputElement;

    result.value = (Number(number1.value) + Number(number2.value)).toString();
}
