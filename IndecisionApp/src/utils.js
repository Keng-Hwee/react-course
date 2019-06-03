console.log("utils.js is running");

const square = x => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//exports: default export OR named export

// named export
export { square, add, subtract as default };

// OR
// export default (a,b) => a-b
