{
  // 변수 호이스팅이 발생하지 않는 것처럼 동작한다
  // ReferenceError 
  console.log(foo);
  const foo = 1;
  console.log(foo);
}

// 블록 레벨 스코프를 갖는다
// ReferenceError
console.log(foo);