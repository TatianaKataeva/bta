const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const locator2 = require('../data/locator').logout;
const user = require('../data/test.data').user;

describe(`Logout`, function () {

    it('Once user clicks Logout, he/she is redirected to the Login page', function () {
        browser.url('/');
        browser.waitForVisible(locator.email, 700);
        browser.setValue(locator.email, user.email);
        browser.setValue(locator.password, user.password);
        browser.click(locator2.loginButton);
        browser.waitForVisible(locator2.bugReportForm, 2000);
        browser.click(locator2.logoutButton);
        let loginPage = browser.waitForVisible(locator2.loginButton, 2000);
        assert.isTrue(loginPage, 'true', 'User is not redirected to the Login Page');
    });

    it('Once user clicks Logout,fields are empty' , function () {
        browser.refresh();
        browser.waitForVisible(locator.email, 7000);
        browser.setValue(locator.email, user.email);
        browser.setValue(locator.password, user.password);
        browser.click(locator2.loginButton);
        browser.waitForVisible(locator2.bugReportForm, 2000);
        browser.click(locator2.logoutButton);
        browser.waitForVisible(locator.email, 2000);
        let emptyEmailField = browser.getValue(locator.email, 'value');
        let emptyPasswordField = browser.getValue(locator.password, 'value');
        assert.equal(emptyEmailField && emptyPasswordField, '', 'Logout fields are not empty');
    });

    it('Once user clicks Logout,user is able to login again' , function () {
        browser.refresh();
        browser.waitForVisible(locator.email, 7000);
        browser.setValue(locator.email, user.email);
        browser.setValue(locator.password, user.password);
        browser.click(locator2.loginButton);
        let firstLogin = browser.waitForVisible(locator2.bugReportForm, 2000);
        browser.click(locator2.logoutButton);
        browser.waitForVisible(locator.email, 2000);
        browser.setValue(locator.email, user.email);
        browser.setValue(locator.password, user.password);
        browser.click(locator2.loginButton);
        let secondLogin = browser.waitForVisible(locator2.bugReportForm, 2000);
        assert.equal(firstLogin && secondLogin, true, 'User is not able to login');
    });

});