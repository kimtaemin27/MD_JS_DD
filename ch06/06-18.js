var foo = 'Lee';

console.log(foo);

// 이전 참조를 제거 foo 변수는 더이상 'Lee' 를 참조하지 않는다
// 이 방법은 유용하지 않고 변수의 스코프를 좁게 만들어 변수 자체를 빨리 소멸시키는 것이 낫다
foo = null;

console.log(foo);