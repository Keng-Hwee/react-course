"use strict";

var visible = false;
var appRoot = document.getElementById("app");

var toggleDetailsVisibility = function toggleDetailsVisibility() {
    visible = !visible;
    appRender();
};

var appRender = function appRender() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleDetailsVisibility },
            visible ? "Hide details" : "Show details"
        ),
        visible && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "This is some text"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

appRender();
