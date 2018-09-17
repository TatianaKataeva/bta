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

    it('Structure table has the Header', function () {
        browser.waitForVisible(locator.bugList.bodyTable,3000);
        let headerTableVisible = browser.isVisible(locator.bugList.headerTable);
        assert.isTrue(headerTableVisible, 'Header table NOT Visible');

    });

    it('Structure table has the List of Bug-reports', function () {
        let bodyTableVisible = browser.isVisible(locator.bugList.bodyTable);
        assert.isTrue(bodyTableVisible, 'List of bugs NOT Visible');

    });

});