alert("hi");

//------------
const a = 10;
const b = 2;
let myName = "yeongtaek"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
// 매번 바꿔야 하므로 번거로워진다.
// 그러므로 변수를 선언한다. -> 3~5행

myName = "Oh yeongtaek";
console.log("hello " + myName);
// const는 상수이므로 값이 고정되어 있다.
// let은 변수의 재선언이 가능하다.
// 재선언될 경우 그 아래에서부터 적용된다.

//------------
const player = {
    name: "yeongtaek",
    points: 100,
    fat: false,
};
console.log(player);
player.lastName = "potato"; // 속성값에 없는 경우에는 추가된다.
player.points = 15; // 속성값이 있는 경우에는 최근에 선언한 값으로 수정된다.
console.log(player);

player.points = player.points + 15;
console.log(player.points); // 15+15

//------------
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("영택", 31);
sayHello("석용", 32);
sayHello("의하", 22);

//------------
function plus(a, b) {
    console.log(a + b);
}

plus(8, 60);
plus("8", 60);

//------------
const player2 = {
    name: "yeongtaek",
    sayHellow2: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
};

console.log(player2.name);
player2.sayHellow2("창훈");

//------------
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy); // potato, tomato, pizza
toBuy[2] = "water"; // 2번째 요소를 바꿈
console.log(toBuy); // potato, tomato, water
toBuy.push("meat"); // meat를 추가
console.log(toBuy); // potato, tomato, water, meat

//------------
const player3=  {
    name: "yeongtaek",
    age: 31,
};
console.log(player3); // yeongtaek, 31
player.name = "Oh yeongtaek"; // const 이지만, 이름을 업데이트
console.log(player3); // Oh yeongtaek, 31
player3.sexy = "soon";
console.log(player3); // Oh yeongtaek, 31, soon

//------------
function minusFive(potato) {
    console.log(potato - 5);
}

minusFive(10, 20, 7, 3, 0); // 5

//------------
const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
};

calculator.add(5, 1); // 6

//------------
const calculator2 = {
    plus: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    times: function(a, b) {
        console.log(a * b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    power: function(a, b) {
        console.log(a ** b);
    }
};

calculator2.plus(2, 3);
calculator2.minus(2, 3);
calculator2.times(2, 3);
calculator2.divide(2, 3);
calculator2.power(2, 3);

//------------함수 내, console.log() 사용하지 않기
const calculator3 = {
    plus: function (a, b) {
        return a + b;
    },
};

const plusResult = calculator3.plus(2, 3);
console.log(plusResult); // 5


//------------return 사용
const calculator4 = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    times: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};

const plusRst = calculator4.plus(2,3);
const minusRst = calculator4.minus(plusRst, 10);
const timesRst = calculator4.times(10, minusRst);
const divideRst = calculator4.divide(timesRst, plusRst);
const powerRst = calculator4.power(divideRst, timesRst);
// console.log()는 콘솔창에 값을 출력하기 위한 함수일 뿐!
// console.log()를 사용하지 않고 
// 콘솔창에서 확인하고 싶다면, 변수명을 입력하면 된다.
// ex. timesRst