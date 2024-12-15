const fs = require("fs"); //synchronous
const https = require("https"); //synchronous

var a = 100098; //synchronous
var b = 90788; //synchronous
console.log("asynchronous code ahead!");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data successfully !");
});

setTimeout(() => {
  console.log("setTimeout called after 5 secs");
}, 0);

setImmediate(() => {
  console.log("I am immediate!");
  process.nextTick(() => {
    console.log("first tick");
  });
});

process.nextTick(() => {
  console.log("I am the main tick!");
});
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});

//synchronous
// const fileSync = fs.readFileSync("./file.txt", "utf-8"); //blocks the main thread - offloads to libuv but keeps thread occupied

const file = fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("FileData:", data);
});

function multiplyFn(a, b) {
  //synchronous
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b); //synchronous
console.log(c); //synchronous
/**
Output : 
asynchronous code ahead!
9087697224
FileData: I am being executed by libuv !
fetched data successfully !
setTimeout called after 5 secs
 */
