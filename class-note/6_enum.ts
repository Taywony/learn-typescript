
// 드롭다운과 같이 목록인 형태에 사용하기 좋다.

enum Shoes {
  Nike,
  Adidas
}

const MyShoes = Shoes.Nike
console.log(MyShoes) // 0  초기값을 할당하지 않으면 자동으로 0이 할당되며 아래로 내려갈수록 +1이 된다.

const YourShoes = Shoes.Adidas
console.log(YourShoes) // 1


// 문자를 초기값으로 선언해 줄 수 있다.
enum sports {
  football = '축구',
  baseball = '야구'
}

const MySports = sports.football
console.log(MySports) // 축구

const YourSports = sports.baseball
console.log(YourSports) // 야구


// 예시
enum Answer {
  Yes = 'Y',
  No = 'N',
}

const askQuestion = (answer: Answer) => {
  if(answer === Answer.Yes) {
    console.log('정답입니다.')
  } else if(answer === Answer.No) {
    console.log('오답입니다.')
  } 
}

askQuestion(Answer.Yes)
// askQuestion('No') // 파라미터가 enum을 통해서 들어간게 아니기 때문에 에러가 난다.