
// 함수의 파라미터에 타입을 정의하는 방식
const sum = (a: number, b: number) => {
  return a + b;
}

sum(1,5)

// 함수의 반환값에 타입을 정의하는 방식
const add = (): number => {
  return 10
}


// 기본적인 함수 타입 선언 방식
const sample = (a: number, b:number): number => {
  return a + b;
}


// 옵셔널 체이닝
const log = (a: string, b?: string) => {    // 옵셔널체이닝 "?"을 사용해서 두번째 인자 b가 만약 없어도 함수가 실행되는데 문제가 없다.
  
}

log('hello')
log('hello', 'world')



// 매개변수로 배열이 들어올수도 있다.
const plus = (a: number, ...nums: number[]): number => {
  let totalOfNums = 0;
  for(let i in nums) {
    totalOfNums += nums[i]
  }

  return a + totalOfNums
}

plus(12,2023)

