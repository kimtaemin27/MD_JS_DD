// var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다
// 따라서 변수 선언문 이전에 변수를 참조할 수 있다
console.log(foo);

var foo;
console.log(foo);

foo = 1;
consolee.log(foo);