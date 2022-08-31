const o = {};

// 내부 슬롯 직접 접근 불가
// Uncaught SyntaxError
o.[[Prototype]]

// 일부는 접근 가능
// Object.prototype
o.__proto__