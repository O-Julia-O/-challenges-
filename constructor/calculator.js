function Calculator() {
    this.read = function() {
        this.firstNum = +prompt("Enter first number", 0)
        this.secondNum = +prompt("Enter first second", 0)
    };

    this.sum = function() {
        return this.firstNum + this.secondNum;
    };

    this.mul = function() {
        return this.firstNum * this.secondNum;
    };
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );