/* Перепишите конструкцию if с использованием условного оператора '?': */

/*
let result;

if (a + b < 4) 
{
  result = 'Мало';
} 
else 
{
  result = 'Много';
}
 */

let a = 2
let b = 3

function sign(a, b) 
{
    let result = (a + b < 4) ? "Мало" : "Много"

    return result
}

console.log(sign(a, b))

 