var React = require("react");
var Clock = require("Clock");

var Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <p>Countdown Component</p>
                <Clock totalSeconds={260}/>
            </div>
        )
    }
});

module.exports = Countdown;