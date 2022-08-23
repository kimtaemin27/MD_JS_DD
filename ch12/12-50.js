// n 만큼 어떤 일을 반복한다
function repeat1(n) {
    // i 를 출력한다
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}

repeat1(5);
console.log('--------------------');
// n 만큼 어떤 일을 반복한다
function repeat2(n) {
    for (var i = 0; i < n; i++) {
        // i가 홀수일 때만 출력한다
        if (i % 2) {
            console.log(i);
        }
    }
}

repeat2(5);