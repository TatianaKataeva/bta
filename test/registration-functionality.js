const assert = require('chai').assert;
const locator = require('../data/locator');
const data = require('../data/test.data').registrationPageFunctionality;

describe('Registration Functionality', function () {

    describe('First Name Field', function () {

        it(`Can accept any ${data.firstNameMinLength} symbol${data.firstNameMinLength > 1 ? 's' : ''}`, function() {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.registrationButton, 7000);
            browser.click(locator.loginPage.registrationButton);
            browser.setValue(locator.registrationPage.firstName,'1'.repeat(data.firstNameMinLength));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.firstNameMinLength);
        });

        it(`Field can accept any ${data.firstNameMaxLength} symbols`, function() {
            browser.clearElement(locator.registrationPage.firstName);
            browser.setValue(locator.registrationPage.firstName,'2'.repeat(data.firstNameMaxLength));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.firstNameMaxLength);
        });

        it(`Field can\'t accept ${data.firstNameMaxLength + 1} symbols`, function() {
            browser.clearElement(locator.registrationPage.firstName);
            browser.setValue(locator.registrationPage.firstName,'3'.repeat(data.firstNameMaxLength + 1));
            let input = browser.getValue(locator.registrationPage.firstName);
            assert.equal(input.length, data.firstNameMaxLength);
        });

        it('Empty field should cause error message', function () {
            browser.clearElement(locator.registrationPage.firstName);
            browser.click(locator.registrationPage.registerButton);
            browser.waitForVisible(locator.registrationPage.errorMessage,7000);
            let error = browser.getText(locator.registrationPage.errorMessage);
            assert.equal(error, data.emptyFieldError);
        });
    });

    describe('Last Name Field', function () {

        it(`Can accept any ${data.lastNameMinLength} symbol${data.lastNameMinLength > 1 ? 's' : ''}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.registrationButton, 7000);
            browser.click(locator.loginPage.registrationButton);
            browser.setValue(locator.registrationPage.lastName,'4'.repeat(data.lastNameMinLength));
            let input = browser.getValue(locator.registrationPage.lastName);
            assert.equal(input.length, data.lastNameMinLength);
        });

        it(`Field can accept any ${data.lastNameMaxLength} symbols`, function() {
            browser.clearElement(locator.registrationPage.lastName);
            browser.setValue(locator.registrationPage.lastName,'5'.repeat(data.lastNameMaxLength));
            let input = browser.getValue(locator.registrationPage.lastName);
            assert.equal(input.length, data.lastNameMaxLength);
        });

        it(`Field can\'t accept ${data.lastNameMaxLength+ 1} symbols`, function() {
            browser.clearElement(locator.registrationPage.lastName);
            browser.setValue(locator.registrationPage.lastName,'6'.repeat(data.lastNameMaxLength + 1));
            let input = browser.getValue(locator.registrationPage.lastName);
            assert.equal(input.length, data.lastNameMaxLength);
        });

        it('All empty fields should cause error message', function () {
            browser.clearElement(locator.registrationPage.firstName);
            browser.clearElement(locator.registrationPage.lastName);
            browser.click(locator.registrationPage.registerButton);
            let error = browser.getText(locator.registrationPage.errorMessage);
            assert.equal(error, data.emptyFieldError);
        });

        it('Empty Last Name Field should cause error', function () {
            browser.setValue(locator.registrationPage.firstName, 'a');
            browser.clearElement(locator.registrationPage.lastName);
            browser.click(locator.registrationPage.registerButton);
            let error = browser.getText(locator.registrationPage.errorMessage);
            assert.equal(error, data.emptyFieldError);
        })
    });
});