var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    // set initial value of count
    getInitialState: function() {
        return {
            count: 0
        };
    },
    // setting the countdown base on user input
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function() {
        // get count from the state
        var {count} = this.state;

        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;
