/* Перепишите код с использованием одной конструкции switch */

/* const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} */

function checkNumber(number) 
{
    switch(number) {
        case 0 : 
            console.log("You've entered '0'");
            break;
        case 1 : 
            console.log("You've entered '1'");
            break;
        case 2 || 3: 
            console.log("You've entered '2' or '3'");
            break;
        default: 
            console.log("just checking")
    }
}

checkNumber(0)

