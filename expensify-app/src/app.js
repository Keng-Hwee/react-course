import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css"; //abs path looks into node_modules
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
    addExpense({ description: "Water Bill", amount: 4500, createdAt: 1 })
);
store.dispatch(
    addExpense({ description: "gas bill", amount: 1000, createdAt: 2 })
);
store.dispatch(
    addExpense({ description: "rent", amount: 109500, createdAt: 3 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
