// 이 시점에는 변수 호이스팅에 의해 이미 foo 변수가 선언되었다
// 변수 foo는 undefined로 초기화 되었다
console.log(foo);

// 변수에 값을 할당
foo = 123;

console.log(foo);

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다
var foo;