var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅 한다
var str = x.toString();

// string 10
console.log(typeof str, str);

// x 변수의 값이 변경된 것은 아니다
// number 10
console.log(typeof x, x);