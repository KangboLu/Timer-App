// import modules
var React = require("react");
var Navigation = require("Navigation");

// main component definition
var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="row">
                <div className="column small-centered medium-6 large-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

// exports Main component
module.exports = Main;