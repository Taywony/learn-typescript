// JS
let str = 'hello';

// TS
const str2: string = 'hello'
const num: number = 2

// TS 배열
const arr1: Array<number> = [1,2,3]
const arr2: Array<string> = ['Tay', 'Kim', "FrontEnd"]

// TS 배열 리터럴
const arr3: number[] = [1,2,3]
const arr4: string[] = ['Tay', 'Kim', "FrontEnd"]

// TS 튜플
// 모든 index 순서별 타입이 지정되어 있는 배열
const address: [string, string, number] = ['gangnam', 'seoul', 250]


// TS 객체
const drink1: object = {
  whisky: 'balvenie',
  beer: 'cass',
  age: 32,
};

const drink2: {whisky: string, beer: string, age: number} = {     // value 각각의 타입까지 지정할 수 있다.
  whisky: 'balvenie',
  beer: 'cass',
  age: 31,
}


// TS 진위값
const show: boolean = true;

