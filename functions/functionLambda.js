let age = 20

let welcome = (age > 18) ? 
    () => console.log("Hello") :
    () => console.log("Hi");

welcome(age)

/* Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией: */

/* 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
); */

let ask = (question, yes, no) => {
    if (question) {
        yes()
    }
    else {
        no()
    }
}

ask(true, () => console.log("Вы согласились"), () => console.log("Вы отменили выполнение"))
