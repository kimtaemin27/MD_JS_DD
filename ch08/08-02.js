var num = 2;
var kind;

// if 문
if (num > 0) {
    // 음수를 구별할 수 없다
    kind = '양수';
}

// 양수
console.log(kind);

// if ~ else 문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}

console.log(kind);

// if ~ else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}

console.log(kind);