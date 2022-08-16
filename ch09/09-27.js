var elem = null;

// elem이 Falsy 이면 elem 으로 평가되고 Truthy 이면 elem.value 로 평가된다
var value = elem && elem.value;
console.log(value);