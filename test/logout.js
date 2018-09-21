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
        let loginPage = browser.isVisible(locator2.loginButton);
        assert.isTrue(loginPage, 'true', 'User is not redirected to the Login Page');
    });

});