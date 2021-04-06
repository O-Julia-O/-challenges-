let age = 20

let welcome = (age > 18) ? 
    () => console.log("Hello") :
    () => console.log("Hi");

welcome(age)

