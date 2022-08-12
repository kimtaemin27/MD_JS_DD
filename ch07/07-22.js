var x = 2,
    result;

// 2 % 2 는 0이고 0 은 false로 압묵적 타입 변환된다
if (x % 2) {
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result);