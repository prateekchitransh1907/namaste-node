require("./xyz"); //call one module into another - common js module
//const { message, calculateSum } = require("./calculate/sum"); //common js module
//import { message, calculateSum } from "./sum.js";
const { multiply, calculateSum, message } = require("./calculate");
const package = require("./package.json");
const arr = [
  {
    link: "link1",
    url: "url1",
  },
  {
    link: "link2",
    url: "url2",
  },
];

const mapArray = arr.map((item) => ({
  [item.link]: item.url,
}));

var a = 10;
var b = 90;
calculateSum(a, b);
multiply(a, b);
console.log(message);
console.log(package);
console.log(globalThis === global);
