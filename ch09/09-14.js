// String 생성자 함수를 new 연산자 없이 호출
console.log(String(1));
// "1"
console.log(String(NaN));
// "NaN"
console.log(String(Infinity));
// "Infinity"

// 불리언 타입 -> 문자열 타입
console.log(true);
// "true"
console.log(false);
// "false"

// 숫자 타입 => 문자열 타입
console.log((1).toString());
// "1"
console.log((NaN).toString);
// "NaN"
console.log((Infinity).toString);
// "Infinity"

// 불리언 타입 -> 문자열 타입
console.log((true).toString());
// "true"
console.log((false).toString());
// "false"

// 문자열 연결 연산자를 이용하는 방법
console.log(1 + '');
// "1"
console.log(NaN + '');
// "NaN"
console.log(Infinity + '');
// "Infinity"

//  불리언 타입 -> 문자열 타입
console.log(true + '');
// "true"
console.log(false + '');
// "false"