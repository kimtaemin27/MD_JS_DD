// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
// console.dir 은 console.log 와는 달리 함수 객체의 프로퍼티 까지 출력한다
// 단 Node.js 환경에서는 console.log 와 같은 결과가 출력된다
console.dir(add);

// 함수 호출
console.log(add(2, 5));