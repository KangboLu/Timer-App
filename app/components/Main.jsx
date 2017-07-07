// import modules
var React = require("react");
var Navigation = require("Navigation");

// main component definition
var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                <Navigation/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

// exports Main component
module.exports = Main;