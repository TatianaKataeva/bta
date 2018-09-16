const assert = require('chai').assert;
const data = require('../data/test.data').loginPage;
const locator = require('../data/locator').loginPage;

describe('Registration button', function() {

    it('Empty field should cause error message', function() {
        browser.clearElement(locator.loginPage.firstName);
        browser.click(locator.loginPage.registerButton);
        browser.waitForVisible(locator.loginPage.errorMessage, 7000);
        let error = browser.getText(locator.loginPage.errorMessage);
        assert.equal(error, data.emptyFieldError);
    });
});