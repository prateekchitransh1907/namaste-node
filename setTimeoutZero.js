console.log("set timeout of zero");

var a = 100098; //synchronous
var b = 90788; //synchronous

setTimeout(() => {
  console.log("call me ASAP!");
}, 0);

setTimeout(() => {
  console.log("call me later like in 3 seconds!");
}, 3000);

function multiplyFn(a, b) {
  //synchronous
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b); //synchronous
console.log(c); //synchronous
