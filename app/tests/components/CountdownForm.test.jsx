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
})