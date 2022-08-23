function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 숫자값 이어야 한다');
    }
    return x + y;
}

// TypeError
console.log(add(2));
console.log(add('a', 'b'));