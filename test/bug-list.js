const assert = require('chai').assert;
const data = require('../data/test.data').bugList;
const locator = require('../data/locator');

describe('Bug List Page', function () {

    it('Open Bug List Page from Navigation Bar on Bug Report Form', function () {
        browser.url('/');
        browser.waitForVisible(locator.loginPage.email,5000);
        browser.setValue(locator.loginPage.email,'tester@test.com');
        browser.setValue(locator.loginPage.password,'test');
        browser.click(locator.loginPage.loginButton);
        browser.waitForVisible(locator.navigationBar.allIssuesButton,5000);
        browser.click(locator.navigationBar.allIssuesButton);
        let bugListVisible = browser.isVisible(locator.bugList.bodyBugList);
        assert.isTrue(bugListVisible, 'Bug List NOT Visible');

    });

});