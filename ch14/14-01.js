/**
 * 
 * @returns 
 */
function foo() {
  var x = 'local';
  console.log(x);
  return x;
}

foo();
// ReferenceError
console.log(x);