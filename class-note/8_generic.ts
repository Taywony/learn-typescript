// function logText(text) {
//   console.log(text);

//   return text;
// }

// logText('hello');
// logText(100);
// logText(true);

// function logText1<T>(text: T): T {
//   console.log(text);

//   return text;
// } 

// logText1<string>('world')


// 기존 타입과 제네릭타입의 차이점
const logText = (text: string) => {
  console.log(text);
  text.split('').reverse().join('')   // 파라미터가 string 타입이기 때문에 해당 속성들을 지원한다.

  return text;
}

logText('a')
// logText(200)  // 파라미터 지정은 하지 않았을때는 인자로 number형을 넣을수가 있지만 string 으로 지정한 후에는 string을 제외한 다른 형식은 넣을수가 없다.

// 만약 파라미터로 number 형식을 받는 함수가 필요할 때는 기존의 방식대로라면 받는 파라미터가 number 형식인 함수를 아래와 같이 하나 더 생성해야 한다.
const logNumber = (num: number) => {
  console.log(num)
  num.toLocaleString()

  return num;
}

// logNumber('a')
logNumber(200)



// 위와같이 동일한 로직을 실행하는 함수이지만 파라미터의 타입이 다르다는 이유로 계속해서 함수만 새로 생성하게 된다면
// 전체적인 코드가 방대해지고, 그에따라 유지보수 측면에서도 좋지 않다.
// 해결방법중 유니온타입과 제네릭 타입이 있고, 각 방법의 장단점에 따른 차이점을 확인해본다.


// 유니온 타입을 사용할 때 문제점
const logText2 = (text: string | number) => {
  console.log(text);

  return text;
}

const a = logText2('hello world')
const b = logText2(1000)

// string 탑입의 파라미터를 받아서 그 값을 변수 a에 저장해도 a의 타입이 string으로 확정되지 않고 계속 유니온 타입으로 남아있다.
// 이러한 문제점은 string 타입에 제공되는 속성을 사용하려고 해도 number 타입에서는 사용이 불가능한 속성들은 사용할 수가 없다.
// a.split('')
// b.toFixed()






// 제네릭 타입을 사용할 때 
const logText3 = <T>(text: T): T => {
  console.log(text);

  return text;
}

// 제네릭은 함수를 호출할때 맞는 타입을 같이 지정해주어 하나의 함수로 여러 타입을 사용할 수 있도록 해준다.
const c = logText3<string>('hello world')
const d = logText3<number>(2000)
const e = logText3<boolean>(true)

// 지정한 타입의 해당하는 속성들도 사용이 가능하다.
c.split('')
d.toFixed()



// interface 에 제네릭을 선언하는 방법

// interface Dropdown {
//   value: string,
//   selected: boolean,
// }

interface Dropdown<T> {
  value: T,
  selected: boolean,
}

const objt: Dropdown<number> = {
  value: 10,
  selected: false,
}



// 제네릭의 타입 제한하기

// 1. 정의되지 않은 타입
// const logTextLength = <T>(text: T[]): T[] => {
//   // console.log(text.length)
//   text.forEach(function (text) {
//     console.log(text)
//   })

//   return text;
// }

// logTextLength<string>(['hello', 'world'])


// 2. 정의된 타입 
interface LengthType {
  length: number;
}

const logTextLength = <T extends LengthType>(text: T): T => {

  text.length

  return text
}

// logTextLength(2000)



// 3. keyof 예약어
interface ShoppingItem {
  name: string,
  price: number,
  stock: number,
}

// keyof 를 사용해서 ShoppingItem에 포함된 key만 파라미터로 들어올 수 있도록 설정할 수 있다.
const getShoppingItemOption = <T extends keyof ShoppingItem >(itemOption: T): T => {


  return itemOption
}

// getShoppingItemOption('10')
// getShoppingItemOption(10)
// getShoppingItemOption(true)

getShoppingItemOption('name')
getShoppingItemOption('price')
getShoppingItemOption('stock')
