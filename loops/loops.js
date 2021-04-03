/* При помощи цикла for выведите чётные числа от 2 до 10. */

for (let i = 1; i <= 10; i++)
{
    if (i % 2 === 0) {
        console.log(i)
    }
}

/* Перепишите код, заменив цикл for на while, без изменения поведения цикла */
/* 
        for (let i = 0; i < 3; i++) 
        {
            alert( `number ${i}!` );
        } 

*/

let i = 0;

while (i < 3)
{
    console.log( `number ${i}!` )
    i++
}