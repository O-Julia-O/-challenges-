//Свойство из переменной

function makeUser(name, age) {
    return {
        name: name,
        age : age,
    };
}

let user = makeUser("John", 30);
console.log(user.name);

//перебор всех свойств
for (let key in user)
{
    //имена свойств
    console.log(key); 
    //значение ключей
    console.log(user[key])
}