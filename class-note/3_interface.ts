interface User {
  name: string,
  age: number,
}

// 변수에 interface 활용
let student: User = {
  name: 'tay',
  age: 31,
}
 

// 함수에 interface 활용
const getUser = (user: User) => {
  console.log(user)
}

const capt = {
  name: '캡틴',
  age: 200
}

getUser(capt);


// 함수의 스펙(구조)에 interface 활용
interface SumFunction {
  (a: number, b: number): number

}


let sum: SumFunction
sum = function(a: number, b: number): number{
  return a + b;
}


// 인덱싱
interface StringArray {
  [index: number]: string
}

let arr: StringArray = ['a','b','c']
arr[0] = 'd'



// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'abc';
obj['cssFile'] = /abc/;

Object.keys(obj).forEach(function(value) {

})


// interface 확장
interface Person {
  name: string,
  age: number,
}

interface Developer extends Person { 
  language: string,
}

let tay: Developer = {
  name: 'taewon',
  age: 31,
  language: 'TS'
}

interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj);
}

let person = { name: 'Capt', age: 28 };
logAge(person);

