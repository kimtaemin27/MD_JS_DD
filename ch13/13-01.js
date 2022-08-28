function add(x, y) {
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있따
  // 즉, 매개변수의 스코프는 함수 몸체 내부다
  console.log(x, y);
  return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조 할 수 있다
// ReferenceError
console.log(x, y);