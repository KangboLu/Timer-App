var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var CountdownForm = require("CountdownForm");

// testing whether the countdown form exist
describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });
    
    it('should call onSetCountdown if valid seconds entered', () => {
        // inject spy to component
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        // manipulate countdown form
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        // assertion
        expect(spy).toHaveBeenCalledWith(109);
    });
    
    it('should not call onSetCountdown if invalid seconds entered', () => {
        // inject spy to component
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        
        // manipulate countdown form
        countdownForm.refs.seconds.value = 'abc';
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        // assertion
        expect(spy).toNotHaveBeenCalled();
    });
})