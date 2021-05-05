let user = new Object(); //синтаксис 'конструктор объекта'
let anotherUser = {}; //синтаксис 'литерал объекта'

let firstUser = {           // объект
    name: "John",           // под ключом "name" хранится значение "John"
    age : 30,               // под ключом "age" хранится значение 30
    "likes birds": true,    // имя свойства из нескольких слов должно быть в кавычках
};

// получаем свойства объекта:

console.log(firstUser.name);
console.log(firstUser.age);

//добавляем свойство с логическим типом
firstUser.isAdmin = true;
console.log(firstUser.isAdmin);

// для удаления свойства
delete firstUser.age;
console.log(firstUser.age);

//обращение к свойству с двойным именем
console.log(firstUser["likes birds"]);
