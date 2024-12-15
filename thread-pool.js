const crypto = require("node:crypto");
//process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("first key is generated!");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("second key is generated!");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("third key is generated!");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("fourth key is generated!");
});

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("fifth key is generated! more than UV_THREADPOOL_SIZE");
});
