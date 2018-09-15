const assert = require('chai').assert;
const locator = require('../data/locator');
const data = require('../data/test.data').registrationPageFunctionality;

describe('Registration Functionality', function () {

    describe('First Name Field', function () {

        it(`Can accept any ${data.minLength} symbol${data.minLength > 1 ? 's' : ''}`, function() {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.registrationButton, 7000);
            browser.click(locator.loginPage.registrationButton);
            browser.setValue(locator.registrationPage.firstName,'1'.repeat(data.minLength));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.minLength);
        });

        it(`Field can accept any ${data.maxLength} symbols`, function() {
            browser.clearElement(locator.registrationPage.firstName);
            browser.setValue(locator.registrationPage.firstName,'2'.repeat(data.maxLength));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.maxLength);
        });

        it(`Field can\'t accept ${data.maxLength + 1} symbols`, function() {
            browser.clearElement(locator.registrationPage.firstName);
            browser.setValue(locator.registrationPage.firstName,'3'.repeat(data.maxLength + 1));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.maxLength);
        });

        it('Empty field should cause error message', function () {
            browser.clearElement(locator.registrationPage.firstName);
            browser.click(locator.registrationPage.registerButton);
            browser.waitForVisible(locator.registrationPage.errorMessage,7000);
            let error = browser.getText(locator.registrationPage.errorMessage);
            assert.equal(error, data.emptyFieldError);
        });
    });
});