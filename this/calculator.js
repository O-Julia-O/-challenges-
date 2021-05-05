

let calculator = {
    firstNum : 0,
    secondNum: 0,

    read() {
        this.firstNum = +prompt("Enter first number", 0);
        this.secondNum = +prompt("Enter second number", 0)
    },
    sum() {
        return this.firstNum + this.secondNum;
    },
    mul() {
        return this.firstNum * this.secondNum;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());