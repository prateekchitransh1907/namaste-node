const crypto = require("node:crypto");

console.log("Blocking thread example");
var a = 100098; //synchronous
var b = 90788; //synchronous
//pbkdf2 - password based key derivative function 2
//Synchronous function that blocks the main thread -- never use
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated!");

//Asynchronous function for same key generation
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("second key is generated!");
});
function multiplyFn(a, b) {
  //synchronous
  const result = a * b;
  return result;
}
var c = multiplyFn(a, b); //synchronous
console.log(c); //synchronous
