// x 가 짝수이면 result 변수에 문자열 '짝수' 를 할당하고, 홀수이면 문자열 '홀수'를 할당한다
var x = 2;
var result;

// 2 % 2 는 0 이기 때문에 false 로 압묵적 강제 변환된다
if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}

// 짝수
console.log(result);