import React from "react";

const PortfolioThingsDonePage = props => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>The page if for the item with id of {props.match.params.id}</p>
    </div>
);

export default PortfolioThingsDonePage;