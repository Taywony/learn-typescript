interface Develop {
  name: string,
  skill: string
}


interface Person {
  name: string,
  age: number,
}


const introduce = (): Develop | Person => {
  return {name: 'tay', age: 31, skill: 'FE'}
}

const tay = introduce();

console.log(tay.name)

// 해당 속성을 사용할때마다 속성을 포함한 interface 를 as 로 단언하여 사용해야 하기때문에 불편함과 가독성이 좋지 못하다.
if ((tay as Develop).skill) {
  console.log((tay as Develop).skill)
} else if((tay as Person).age) {
  console.log((tay as Person).age)
}


// 위와같이 사용하고자할 때 타입가드(is)를 사용할 수 있다.

// 타입가드 선언
const isDevelop = (target: Develop | Person): target is Develop => {
  return (target as Develop).skill !== undefined
}

if (isDevelop(tay)) {
  console.log(tay.skill) 
} else {
  console.log(tay.age)
}


