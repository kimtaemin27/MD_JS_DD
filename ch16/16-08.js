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

// [[Writable]] 의 값이 false인 경우 해당 프로퍼티의 [[Value]] 의 값을 변경할 수 없다.
// lastName 프로퍼티는 [[Configurable]] 의 값이 false 이므로 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName;

// [[Configurable]] 의 값이 false 인 경우 해당 프로퍼티를 재정의할 수  없다.
// Object.defineProperty(person, 'lastName', { enumerable: true});
// Uncaught TypeError: Cannot redefine property: lastName
descriptor = Object.getOwnPropertyDescriptor(person, 'lastname');
console.log('lastName', descriptor);
// lastName {value: "Lee", writable: false, enumerable: false, configurable: false}

// 접근자 프로퍼티 정의
Object.definePropertiy(person, 'fullName', {

    // getter함수
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
})

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: f, set: f, enumable: true, configurable: true}

person.fullName = 'Taemin Kim';
console.log(person);