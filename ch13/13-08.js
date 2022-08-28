var i = 10;

// for 문에서 선언한 i 는 전역 변수다
// 이미 선언된 i 가 있음으로 중복 선언된다
for(var i = 0; i < 5; i++) {
  console.log(i);
}

// 값이 변경되었다
console.log(i);