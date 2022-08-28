(function () {
  // 즉시 실행 함수의 지역 변수
  var foo = 10;
}());

// ReferenceError
console.log(foo);