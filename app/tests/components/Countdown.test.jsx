var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jquery");
var TestUtils = require("react-addons-test-utils");

var Countdown = require("Countdown");

describe('Countdown', () => {
   it('should exist', () => {
       expect(Countdown).toExist();
   }); 
   
   
  describe('handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            // get the element
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            // testing the count and countdownStatus
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
        
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
            
        });
        
        it('should never set count less than zero', (done) => {
            // get the element
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
  });
});