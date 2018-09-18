const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const data = require('../data/test.data').loginFunctionality;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it('User can enter 1 symbol', function () {
            browser.url('/');
            browser.pause(2000);
            browser.setValue(locator.email,'1');
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 1);
        });

        it('User can enter 22 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a'.repeat(22));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 22);
        });

        it('User can enter 45 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'n'.repeat(45));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 45);
        });

        it('User can\'t enter 46 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'x'.repeat(46));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 45);
        });

        it('Empty email field should cause error message', function () {
            browser.clearElement(locator.email);
            browser.click(locator.loginButton);
            browser.pause(1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, 'Specify email and password');
        });

        it('Unregistered email should cause error message', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a@nn.a');
            browser.setValue(locator.password,'1');
            browser.click(locator.loginButton);
            browser.pause(1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, 'User with this email does not exist');
        });
    });

    describe ('Error design', function (){

        it('Error message background Color', function () {
            let backgroundColor = browser.getCssProperty(locator.errorMessage, 'background-color').value;
            assert.equal(backgroundColor, data.errorDesignBackgroundColor, 'background color is incorrect')
        });

        it('Error message border Color', function () {
            let borderColor = browser.getCssProperty(locator.errorMessage, 'border-color').value;
            assert.equal(borderColor, data.errorDesignBorderColor, 'border color is incorrect')
        });

        it('Error message font family', function () {
            let fontFamily = browser.getCssProperty(locator.errorMessage, 'font-family').value;
            assert.equal(fontFamily, data.errorDesignFontFamily, 'font family is incorrect')
        });

        it('Error message font size', function () {
            let fontSize = browser.getCssProperty(locator.errorMessage, 'font-size').value;
            assert.equal(fontSize, data.errorDesignFontSize, 'font size is incorrect')
        });

        it('Error message font weight', function () {
            let fontWeight = browser.getCssProperty(locator.errorMessage, 'font-weight').value;
            assert.equal(fontWeight, data.errorDesignFontWeight, 'font weight is incorrect')
        });

        it('Error message font color', function () {
            let fontColor = browser.getCssProperty(locator.errorMessage, 'color').value;
            assert.equal(fontColor, data.errorDesignFontColor, 'font color is incorrect')
        });

        it('Error message text align', function () {
            let textAlign = browser.getCssProperty(locator.errorMessage, 'text-align').value;
            assert.equal(textAlign, data.errorDesignTextAlign, 'text align is incorrect')
        });
    });

});
