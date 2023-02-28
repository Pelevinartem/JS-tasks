//P.S. НЕКОТОРЫЕ ПРОБЕЛЫ И ТАБУЛЯЦИЯ БЫЛИ УМЫШЛЕННО ДОПУЩЕННЫ, ДЛЯ УДОБНОГО РАЗДЕЛЕНИЯ ЗАДАЧ. ОТСТУП == СЛЕДУЮЩАЯ ЗАДАЧА.
//КАЖДАЯ ГЛАВА И ПОДГЛАВОК ПОДПИСАНЫ ПЕРЕД НАЧАЛОМ ЗАДАЧ.
//Объекты: основы 4 глава

//4.1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Да, изменить можно.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    return obj
}

//4.2
//Теоретический материал изучен.

//4.3
//Теоретический материал изучен.

//4.4
//Ошибка.

let calculator = {
    read() {
        this.a = +prompt('a?');
        this.b = +prompt('b?');
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

//4.5

let object = {};
function A() { return object; }
function B() { return object; }
alert(new A() == new B());

function Calculator() {
    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
};
let calc = new Calculator();
calc.read();
alert("Sum=" + calc.sum());
alert("Mul=" + calc.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };
};
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

//4.6
//Теоретический материал изучен.

//4.7
//Теоретический материал изучен.

//4.8
//Теоретический материал изучен.

//Типы данных 5 глава

//5.1
//Ошибка или undefined

//5.2
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

//Домножить на 10

function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
};

alert(`Число: ${readNumber()}`);

//i никогда не станет равным 10

function random(min, max) {
    let r = min + Math.random() * (max - min);
    return r;
};
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};
alert(randomInteger(1, 3));

//5.3

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
};
alert(ucFirst("вася"));

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
};
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
};

function extractCurrencyValue(str) {
    return +str.slice(1);
};

//5.4

//4

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

//Выведет a, b и функцию

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
alert(sumInput());

function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }
    return maxSum;
}
alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));

//5.5
function camelize(str) {
    return str.split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join('');
};

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
};
let array = [5, 3, 8, 1];
let filtered = filterRange(array, 1, 4);
alert(filtered);
alert(array);

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        };
    };
};
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);

let array1 = [5, 2, 1, -10, 8];
array1.sort((a, b) => b - a);
alert(array1);

function copySorted(arr) {
    return arr.slice().sort();
}
let array2 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(array2);
alert(sorted);
alert(array2);

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        };
        return this.methods[op](a, b);
    };
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(item => item.name);
alert(names);

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };
let users1 = [vasya1, petya1, masha1];
let usersMapped = users1.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
}));
alert(usersMapped[0].id);
alert(usersMapped[0].fullName);

function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
};
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };
let arr2 = [vasya2, petya2, masha2];
sortByAge(arr2);
alert(arr2[0].name);
alert(arr2[1].name);
alert(arr2[2].name);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
};
let arr3 = [1, 2, 3];
shuffle(arr3);
alert(arr3);

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
};
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };
let array3 = [vasya3, petya3, masha3];
alert(getAverageAge(array3));

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        };
    };
    return result;
};
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
alert(unique(strings));

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
};

//5.6
//Теоретический материал изучен.

//5.7
function unique(arr) {
    return Array.from(new Set(arr));
};

function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    };
    return Object.values(obj);
};
let arr4 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr4));

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys);

//5.8
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[0]);
alert("Read message 0: " + readMessages.has(messages[0]));
messages.shift();

let messages1 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" },
];
let readMap = new WeakMap();
readMap.set(messages1[0], new Date(2017, 1, 1));

//5.9
function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    };
    return sum;
};
let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};
alert(sumSalaries(salaries1));

function count(obj) {
    return Object.keys(obj).length;
};

//5.10
let user = {
    name: "John",
    years: 30,
};
let { name, years: age, isAdmin = false } = user;
alert(name);
alert(age);
alert(isAdmin);

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        };
    };
    return maxName;
};

//5.11
let d = new Date(2012, 1, 20, 3, 12);
alert(d);

function getWeekDay(date) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
};
let date = new Date(2014, 0, 3);
alert(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    };
    return day;
};

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
};
let date1 = new Date(2015, 0, 2);
alert(getDateAgo(date1, 1));
alert(getDateAgo(date1, 2));
alert(getDateAgo(date1, 365));

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
};
alert(getLastDayOfMonth(2012, 0));
alert(getLastDayOfMonth(2012, 1));
alert(getLastDayOfMonth(2013, 1));

function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000);
};
alert(getSecondsToday());

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
};

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас';
    };
    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec + ' сек. назад';
    };
    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    };
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes(),
    ].map(component => component.slice(-2));
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
};
alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));

//5.12
let user = {
    name: "Василий Иванович",
    age: 35,
};
let user2 = JSON.parse(JSON.stringify(user));

let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;
alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
