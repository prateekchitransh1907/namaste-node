function calculateSum(a, b) {
  //export for ES Module
  const sum = a + b;
  console.log(sum);
}
//export for ES Module
const message = "I am an export from different module!";

module.exports = {
  message,
  calculateSum,
}; //<--------------- exportfor common js module

//same as
// module.exports = {
//     message : message,
//     calculateSum : calculateSum,
//   };
