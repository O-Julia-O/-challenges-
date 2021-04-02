/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */

let questionAboutNum = +prompt("Введите число: ", "")

if (questionAboutNum === 0)
{
    alert("0")
}
else if (questionAboutNum > 0) 
{
    alert("1")
}
else if (questionAboutNum < 0)
{
    alert("-1")
}
