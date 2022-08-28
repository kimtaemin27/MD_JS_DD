// 런타임 이전에 선언 단계가 실행된다 아직 변수 초기화 전
// 초기화 이전의 일시적 사각지대 에서는 변수를 참조할 수 없다
// ReferenceError
console.log(foo);

// 변수 선언문에서 초기화 단계가 실행된다
let foo;
// undefined
console.log(foo);

// 할당문에서 할당 단계가 실행된다
foo = -1;
console.log(foo);