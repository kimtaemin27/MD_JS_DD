var done = true;
var message = '';

// 주어진 조건이 true 일 때
if (done) {
    message = 'complete';
}

// if 문은 단축 평가로 대체 가능
// done 이 true 라면 message 에 complete 할당
message = done && '완료';
console.log(message);