
// 타입 추론 기본 1
let aa: string = 'b';

aa

const getB = (b = 10) => {
  let c = 'hello'
  return b + c;
}


// 타입 추론 기본 2
interface Dropdown<T> {
  value: T,
  title: string;
}

let shoppingItem: Dropdown<string> = {
  value: 'air jordan',
  title: 'Nike'
}


// 타입 추론 기본 3
// 이중 제네릭
interface Menu<T> {
  value: T,
  title: string
}

interface Detailed<K> extends Menu<K> {
  location: K,
  city: string
  
}

const menuItem: Detailed<string> = {
  location: 'Gangnam',
  city: 'Seoul',
  value: 'APT',
  title: 'eunma'
}


// Best Common Type
const arr = [1,200, true, 'str'];
