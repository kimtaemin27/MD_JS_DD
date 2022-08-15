// outer 라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        // i + j 가 3이면 outer 라는 식별자가 붙은 레이블 for 문을 탈출한다
        if (i + j === 3) {
            break outer;
        }
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');