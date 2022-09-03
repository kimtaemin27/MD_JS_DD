const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Taemin',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Kim'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);


// 디스크럽터 객체의 프로퍼티를 누락시키면 undefined, false 가 기본값이다
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// [[Enumerable]] 의 값이 false 인 경우
// 해당 프로퍼티는 for ... in 문이나 Object.keys 등으로 열거되지 않는다
console.log(Object.keys(person));