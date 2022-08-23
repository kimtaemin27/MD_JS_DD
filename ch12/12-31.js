function multiply(x, y) {
    // return 키워드와 반환값 사이에 줄바꿈이 있으면
    // 세미콜론 자동 삽입 기능에 의해 세미콜론이 추가된다
    return
    // 무시된다
    x + y;
}

console.log(multiply(3, 5));