const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const locator3 = require('../data/locator').registrationPage;
const locator2 = require('../data/locator').newBugReportPage;
const user = require('../data/test.data').user;
const data = require('../data/test.data').loginPageFunctionality;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it(`User can enter ${data.minLength} symbol${data.minLength > 1 ? 's' : ''}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.email, 7000);
            browser.setValue(locator.email, '1'.repeat(data.minLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.minLength);
        });

        it(`User can enter ${data.midLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email, 'a'.repeat(data.midLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.midLength);
        });

        it(`User can enter ${data.maxLength} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email, 'n'.repeat(data.maxLength));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it(`User can\'t enter ${data.maxLength + 1} symbols`, function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email, 'x'.repeat(data.maxLength + 1));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, data.maxLength);
        });

        it('Empty email field should cause error message', function () {
            browser.clearElement(locator.email);
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.errorMessage, 7000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.noLoginOrPassError);
        });

        it('Unregistered email should cause error message', function () {
            browser.reload();
            browser.url('/');
            browser.waitForVisible(locator.email, 7000);
            browser.setValue(locator.email, 'a@nn.a');
            browser.setValue(locator.password, '1');
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.errorMessage, 1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.wrongLoginError);
        });
    });

    describe('Password field', function () {

        it(`User can enter ${data.minLength} any symbol${data.minLength > 1 ? 's' : ''}`, function () {
            browser.setValue(locator.password, data.oneChar.repeat(data.minLength));
            let actualInpt = browser.getValue(locator.password);
            assert.equal(actualInpt.length, data.minLength, 'Min input length is incorrect');
        });

        it(`User can enter ${data.midLength} symbols`, function () {
            browser.clearElement(locator.password);
            browser.setValue(locator.password, data.oneChar.repeat(data.midLength));
            let input = browser.getValue(locator.password);
            assert.equal(input.length, data.midLength, 'Medium input length is incorrect');
        });

        it(`User can enter ${data.maxLength} symbols`, function () {
            browser.clearElement(locator.password);
            browser.setValue(locator.password, data.oneChar.repeat(data.maxLength));
            let input = browser.getValue(locator.password);
            assert.equal(input.length, data.maxLength, 'Max input length is incorrect');
        });

        it(`User can't enter ${data.maxLength + 1} symbols`, function () {
            browser.clearElement(locator.password);
            browser.setValue(locator.password, data.oneChar.repeat(data.maxLength + 1));
            let input = browser.getValue(locator.password);
            assert.equal(input.length, data.maxLength, ' User can enter more symbols than allowed ');
        });

        it('Empty password field should cause error message', function () {
            browser.refresh();
            browser.waitForVisible(locator.loginButton, 2000);
            browser.click(locator.loginButton);
            browser.waitForText(locator.errorMessage, 2000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.noLoginOrPassError, 'No expected error message displayed when Password field is empty ');
        });

        it('Registered, but not matching password should cause error message', function () {
            browser.refresh();
            browser.waitForVisible(locator.email, 2000);
            browser.setValue(locator.email, user.email);
            browser.setValue(locator.password, data.oneChar);
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.errorMessage, 2000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, data.wrongPasswordError, 'No expected error message displayed when Password does not match');
        });

        it('All symbols in password field are replaced by bullet', function () {
            let type = browser.getAttribute(locator.password, 'type');
            assert.equal(type, 'password', 'Password field type is wrong');
        });
    });

    describe('Login with Correct credentials: Redirecting from "Login" page to the "New Bug Report" page ', function () {

        it('Redirecting', function () {
            browser.refresh();
            browser.waitForVisible(locator.email, 2000);
            browser.setValue(locator.email, user.email);
            browser.setValue(locator.password, user.password);
            browser.click(locator.loginButton);
            browser.waitForVisible(locator2.bugReportForm, 2000);
            let isBugForm = browser.isExisting(locator2.bugReportForm);
            assert.isTrue(isBugForm, 'true', 'No "New Bug Report” page opened');
        });
    });

    describe(' Redirecting from "Login page" to “Registration" page', function () {

        it('Redirecting', function () {
            browser.refresh();
            browser.waitForVisible(locator.registrationButton);
            browser.click(locator.registrationButton);
            browser.waitForVisible(locator3.firstName, 2000);
            let boolenButton = browser.isExisting(locator.registrationButton);
            let boolenName = browser.isExisting(locator3.firstName);
            assert.isTrue(boolenButton && boolenName, 'true', 'No "Registration” page opened');
        });
    });

});