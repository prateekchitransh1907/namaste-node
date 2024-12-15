console.log("Synchronous code");

var a = 1098777;
var b = 9087734;

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);
console.log(c);
