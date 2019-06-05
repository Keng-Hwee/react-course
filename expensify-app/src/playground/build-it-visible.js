class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            test: 1
        };
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>This is some text</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visible = false;
// const appRoot = document.getElementById("app");

// const toggleDetailsVisibility = () => {
//     visible = !visible;
//     appRender();
// };

// const appRender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetailsVisibility}>
//                 {visible ? "Hide details" : "Show details"}
//             </button>
//             {visible && (
//                 <div>
//                     <p>This is some text</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// appRender();
