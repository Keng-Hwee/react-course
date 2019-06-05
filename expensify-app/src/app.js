import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css"; //abs path looks into node_modules
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
