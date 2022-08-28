var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);
}

// local
foo();

// global
console.log(x);