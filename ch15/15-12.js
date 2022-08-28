// 브라우저 환경
let x = 1;

// let const 키워드로 선언한 전역 변수는 전역 객체 window 의 프로퍼티가 아니다
// uncdfined
console.log(window.x);
// 1
console.log(x);