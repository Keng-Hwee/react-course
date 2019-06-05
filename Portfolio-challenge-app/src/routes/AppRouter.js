import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortfolioPage from "../components/PortfolioPage";
import PortfolioThingsDonePage from "../components/PortfolioThingsDonePage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route
                    path="/portfolio"
                    component={PortfolioPage}
                    exact={true}
                />
                <Route
                    path="/portfolio/:id"
                    component={PortfolioThingsDonePage}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
