// const logMessage = (value: string) => {
//   console.log(value);
// }

// logMessage('hello world');


// union Type 
// 특정한 타입이 아닌 하나 이상의 타입을 사용할 수 있도록 한다 ( 오히려 기능적으론 AND 연산자와 같이 기능한다. )
const logMessage = (value: string | number) => {

  if(typeof value === 'number') {
    value.toLocaleString();
  } else if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('only string or number')
  
}

logMessage('hello world')
logMessage(2)

let say: string | number;

say = 'tay'
say = 200
// say = true


interface Develop {
  name: string;
  skill: string;
}


interface Person {
  name: string;
  age: number;
}

const askAnybody = (anybody: Develop | Person) => {
  anybody.name;
}

// 둘중 하나의 interface 규격만 사용 가능
askAnybody({name: 'FE 개발자', skill: 'React'})
askAnybody({name: 'FE 개발자', age: 31})


// intersection Type
// 특정한 타입이 아닌 지정한 타입 모두를 포함한다. ( 따라서 기능적으로는 OR 연산자의 기능을 한다. )

const askSomeone = (someone: Develop & Person) => {
  someone.name;
  someone.age;
  someone.skill;
}

// 지정한 두 interface의 모든 속성을 사용해야 한다.
askSomeone({name: 'BE 개발자', age: 31, skill: 'Java'})


