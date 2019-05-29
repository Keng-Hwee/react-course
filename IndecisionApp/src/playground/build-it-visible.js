let visible = false;
const appRoot = document.getElementById("app");

const toggleDetailsVisibility = () => {
    visible = !visible;
    appRender();
};

const appRender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetailsVisibility}>
                {visible ? "Hide details" : "Show details"}
            </button>
            {visible && (
                <div>
                    <p>This is some text</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

appRender();
