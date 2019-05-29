console.log("App.js is running");

// JSX - Javascript XML
var app = {
    title: "Indecision App",
    subtitle: "This is a subtitle",
    options: ["One", "Two"]
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
    name: "Keng Hwee",
    age: 25,
    location: "Singapore"
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
