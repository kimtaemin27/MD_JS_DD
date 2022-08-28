function bar() {
  let x = 1;
  // let, const 키워드는 같은 스코프 내에서 중복 선언을 허용하지 않는다
  // SystaxError
  let x = 2;
}

bar();