//import "./utils.js";
import anythingIWant, { square, add } from "./utils.js";
console.log("app.js is runninggg");
console.log(square(2));
console.log(add(1, 10));
console.log(anythingIWant(10, 1)); // Note that this is 'subtract' since it is a default, we can name it

import validator from "validator";
console.log(validator.isEmail("text"));

import React from "react";
import ReactDOM from "react-dom";
const template = <p>THIS IS JSX FROM WEBPACK</p>;
ReactDOM.render(template, document.getElementById("app"));
