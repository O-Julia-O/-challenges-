

/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7. */

// 2/2 
// 3/2
// 3/3 - запись, ибо равны друг другу
// 4/2 - разделено без остатка, и не равно друг другу и 1б переход к след итерации
// 5/2
// 5/3
// 5/4
// 5/5 - равны друг другу, запись


let arrNum = [];

for(let i = 2; i < 10; i++)
{
    let isFlag = false;
    
    for (let j = 2; j < 10; j++)
    {
        if (i % j === 0 && i !== j) 
        {
            isFlag = true;
            console.log(`${i} and ${j} in if`)
            break;
        }
        else if (i === j && isFlag === false)
        {
            arrNum.push(i);
            break;
        }
    }
}

console.log(arrNum);