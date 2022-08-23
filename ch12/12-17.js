function add(x, y) {
    console.log(x, y);
    return x + y;
}

console.log(add(2, 5));

// add 함수의 매개변수 x, y 는 함수 몸체 내부에서만 참조할 수 있다
// ReferenceError
console.log(x, y);