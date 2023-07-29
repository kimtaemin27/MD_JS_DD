const person = {};

Object.defineProperties(person, {

    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Taemin',
        writable: true,
        enumerable: true,
        configurable: true
    },

    lastName: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },

    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firxtName} ${this.lastName}`;
        },

        // setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Taemin Kim';
console.log(person);