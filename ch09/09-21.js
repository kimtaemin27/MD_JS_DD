var done = false;
var message = '';

// 주어진 조건이 false 일 때
if (done) {
    message = 'incomplete';
}

// if 문은 단축 평가로 대체 가능
// done 이 false 라면 message 에 incomplete 할당
message = done && 'incomplete';
console.log(message);