/* Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».*/

let nameLogin = prompt("Enter your name: ", "")
checkName(nameLogin)

//Checking names
function checkName(name) 
{
    if (nameLogin === "Admin") 
    {
        let password = prompt("Enter your password: ")
        checkPass(password)
    }
    else if (nameLogin === "" || nameLogin === null)
    {
        showCancelled()
    }
    else 
    {
        showDontKnow()
    }
}

//Checking passwords
function checkPass(pass) 
{
    if (pass === "I am the chief") 
    {
        showGreeting()
    }
    else if (pass === null)
    {
        showCancelled()
    }
    else 
    {
        showWrongPassword()
    }
}


//Messages
function showGreeting() 
{
    return alert("Hello, Boss!")
}

function showCancelled() 
{
    return alert("Сancelled")
}

function showDontKnow() 
{
    alert("I don't know you!")
}

function showWrongPassword() 
{
    alert("You've entered a wrong password.")
}