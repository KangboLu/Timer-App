var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require("Controls");

var Countdown = React.createClass({
    // set initial value of count
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    // update the timer when the set timer started
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        } 
    },
    componentWillUnmount: function () {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    // function to handle timer start
    startTimer: function () {
        // minue the time for every second
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            
            // change the button after it reached 0
            if (newCount === 0) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    },
    // setting the countdown base on user input
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus});  
    },
    render: function() {
        // get count from the state
        var {count, countdownStatus} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };

        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
