//P.S. НЕКОТОРЫЕ ПРОБЕЛЫ И ТАБУЛЯЦИЯ БЫЛИ УМЫШЛЕННО ДОПУЩЕННЫ, ДЛЯ УДОБНОГО РАЗДЕЛЕНИЯ ЗАДАЧ. ОТСТУП == СЛЕДУЮЩАЯ ЗАДАЧА.
//КАЖДАЯ ГЛАВА И ПОДГЛАВОК ПОДПИСАНЫ ПЕРЕД НАЧАЛОМ ЗАДАЧ.
//Введение 1 глава

//1.1
//Теоретический материал изучен.

//1.2
//Теоретический материал изучен.

//1.3
//Теоретический материал изучен.

//1.4
//Теоретический материал изучен.

//Основы JavaScript 2 глава

//2.1
alert('Я JavaScript!');
//Теоретический материал изучен.

//2.2
//Теоретический материал изучен.

//2.3
//Теоретический материал изучен.

//2.4
let name, admin;
name = "Джон";
admin = name;
alert(admin);

let ourPlanet;
let userName;

//const BIRTHDAY = '18.04.1982';
//const age = someCode(BIRTHDAY);

//2.5
// hello 1
// hello name
// hello Ilya

//2.6
let yourName = prompt("Ваше имя?", "");
alert(yourName);

//2.7
//Теоретический материал изучен.

//2.8
//a = 2
//b = 2
//c = 2
//d = 1

//a = 4
//x = 5

//1
//2
//1
//2
//6
//9px
//$45
//2
//NaN
//3
//4
//5
//6
//7

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b);

//2.9
//true
//false
//true
//true
//false
//false
//false

//2.10
//Да, выведется.

let value = prompt('Какое "официальное" название JavaScript?', '');

if (value === 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

let value1 = prompt('Введите число', 0);
if (value1 > 0) {
    alert(1);
} else if (value1 < 0) {
    alert(-1);
} else {
    alert(0);
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

//2.11
//2
//1 потом 2
//null
//1 потом undefined
//3
//if (age >= 14 && age <= 90)
//if (age < 14 || age > 90)
//Первое и третье выполнятся

let userName1 = prompt("Кто там?", '');

if (userName1 === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (userName1 === '' || userName === null) {
    alert('Отменено');
} else {
    alert("Я вас не знаю");
}

//2.12
//Теоретический материал изучен.

//2.13
//От 1 до 4
//От 1 до 5
//От 0 до 4 в обоих случаях
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

let q = 0;
while (q < 3) {
    alert(`number ${q}!`);
    q++;
}

let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    alert(i);
}

//2.14
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;

    case 1:
        alert('Вы ввели число 1');
        break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

//2.15
//Отличий нет.

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge1(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let xn = prompt("x?", '');
let nx = prompt("n?", '');

if (nx < 1) {
    alert(`Степень ${nx} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(xn, nx));
}

//2.16
//Теоретический материал изучен.

//2.17
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

//2.18
//Теоретический материал изучен.

//Качетво кода 3 глава

//3.1
//Теоретический материал изучен.

//3.2
//Отсутствует множество пробелов между знаками,
//содержимое фигурных скобок выносится на отдельные строки с последней скобкой отдельно,
//за исключением первой, не критичное отсутствие точки с запятой в некоторых местах,
//все что разделяется лучше переносить для лучшей читаемости,
//фигурные скобки с else можно на одной строке оставить, вложенный вызов функции не допустим.

//3.3
//Теоретический материал изучен.

//3.4
//Переборщили с иронией))
//Теоретический материал изучен.

//3.5
//describe("Возводит x в степень n", function () {
//    it("5 в степени 1 будет 5", function () {
//        assert.equal(pow(5, 1), 5);
//    });

//    it("5 в степени 2 будет 25", function () {
//        assert.equal(pow(5, 2), 25);
//    });

//    it("5 в степени 3 будет 125", function () {
//        assert.equal(pow(5, 3), 125);
//    });
//});

//3.6
//Теоретический материал изучен.