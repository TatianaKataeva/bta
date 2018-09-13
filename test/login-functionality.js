const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const data = require('../data/test.data').loginPageFunctionality;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it('User can enter 1 symbol', function () {
            browser.url('/');
            browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'1'.repeat(data.minLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.minLength);
        });

        it('User can enter 22 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a'.repeat(data.midLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.midLength);
        });

        it('User can enter 45 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'n'.repeat(data.maxLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it('User can\'t enter 46 symbols', function () {
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
});