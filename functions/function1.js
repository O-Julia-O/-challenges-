/* Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || */

/* function checkAge(age) {
    age = age > 18 || 'Родители рвзрешили?'
    return age
}
console.log(checkAge(10)) */

function checkAge(age) {
    return age = (age > 18) ? 'Welcome' : 'А родители разрешили?'
}

console.log(checkAge(30))