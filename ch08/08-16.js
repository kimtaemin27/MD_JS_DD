var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count 가 3 이면 코드블록 탈출
    if (count === 3) {
        break;
    }
}