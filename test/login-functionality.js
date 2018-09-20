const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const data = require('../data/test.data').loginFunctionality;
const locator3 = require('../data/locator').registrationPage;
const locator2 = require('../data/locator').newBugReportPage;
const user = require('../data/test.data').user;
const data = require('../data/test.data').loginPageFunctionality;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it(`User can enter ${data.minLength} symbol${data.minLength > 1 ? 's' : ''}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'1'.repeat(data.minLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.minLength);
        });

        it(`User can enter ${data.midLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a'.repeat(data.midLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.midLength);
        });

        it(`User can enter ${data.maxLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'n'.repeat(data.maxLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it(`User can\'t enter ${data.maxLength + 1} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'x'.repeat(data.maxLength + 1));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it('Empty email field should cause error message', function () {
            browser.clearElement(locator.email);
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.errorMessage,7000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.noLoginOrPassError);
        });

        it('Unregistered email should cause error message', function () {
            browser.url('/');
            browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'a@nn.a');
            browser.setValue(locator.password,'1');
            browser.click(locator.loginButton);
            browser.waitForText(locator.errorMessage, 1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.wrongLoginError);
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