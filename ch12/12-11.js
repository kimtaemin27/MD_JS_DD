// 기명 함수 표현식
var add = function foo(x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5));

// 함수 이름으로 호출하면 ReferenceError 가 발생
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자 이다
console.log(foo(2, 5));