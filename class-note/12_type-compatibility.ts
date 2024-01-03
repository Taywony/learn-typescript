// 인터페이스

interface Developer {
  name: string,
  skill: string,
}

interface Perseon {
  name: string,
}

let developer: Developer;
let person: Perseon;

// 할당하는 값쪽의 타입이 더 많은 속성을 갖거나 구조적으로 더 커야 할당하는 변수쪽에 호환이 된다.
// 한마디로 작은것을 큰것 안으로는 넣을 수 있지만 큰것을 작은 것 안으로는 넣을 수 없다.
developer = person
person = developer


// 선언 타입이 다르더라도 내부 값이 같거나 구조적으로 크면 할당이 가능하다
class Korean {
  name: string;
  // skill: string;
}

developer = new Korean



// 함수의 경우
// 위와 동일하게 인자가 개수가 큰것에만 인자 개수가 작은것을 할당할 수 있다.
let small = (a : number) => {
  //
}

let big = (a: number, b: number) => {
  //
}

small = big;
big = small



// 제네릭의 경우
// 내부 키값이 같더라도 설정한 타입이 다를경우 호환되지 않는다.
interface Empty<T> {
  //
}

let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2
notEmpty2 = notEmpty1
