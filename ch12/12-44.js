function countdown(n) {
    if (n < 0) {
        return;
    }
    console.log(n);
    // 재귀 호출
    countdown(n - 1);
}

countdown(10);