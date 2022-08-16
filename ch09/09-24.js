var elem = null;

// elem 이 null 이나 undefined 와 같은 Falsy 이면 elem으로 평가되고
// elem 이 Truthy 값이면 elem.value 로 평가된다
var value = elem && elem.value;