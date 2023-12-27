class Taywony {
  // TS 에서의 class는 constructor 위에 타입을 지정해줘야 한다.
  private name: string;   // 해당 class 안에서만 사용하고 싶으면 private를 사용하면된다.
  public age: number;     // 기본적으로는 public이 적용된다.
  readonly log: string    // 값을 변경하지 못하고 읽을수만 있다.

  constructor(name: string,age: number) {
    this.name = name;
    this.age = age;
  }
}

