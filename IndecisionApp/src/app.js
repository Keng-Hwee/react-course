import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css"; //abs path looks into node_modules
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
