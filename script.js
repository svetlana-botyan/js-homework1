//task 1
let number1 = +prompt ('Введите первое число', 1); 
let number2 = +prompt ('Введите второе число', 2);

if (number1 > number2) {
    console.log (number1);
}
else if (number1 == number2) {
    console.log('Значения равны между собой');
}
else {
    console.log (number2);
}

//task 2

let quantity = +prompt('Введите количество чисел, квадраты которых нужно вывести', 1);
    for (let i = 0; i <= quantity; i++) {
        if (quantity < 100){
            console.log(i ** 2);
        }
        else break;        
    }

//task3

let name1 = prompt ('Введите имя', 'Анна');
let name2 = prompt ('Введите имя', 'Сергей');
let name3 = prompt ('Введите имя', 'Руслан');

alert (name1 + ' ' + name2 + ' ' + name3);

let value1 = +prompt ('Введите число ', '1');
let value2 = +prompt ('Введите число', '2');
let value3 = +prompt ('Введите число', '3');
alert (value1 + value2 + value3);