var x = 5,
    result;

// 선할당 후증가
result = x++;
console.log(result, x);

// 선증가 후할당
result = ++x;
console.log(result, x);

// 선할당 후감소
result = x--;
console.log(result, x);

// 선감소 후할당
result = --x;
console.log(result, x);