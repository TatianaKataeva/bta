const assert = require('chai').assert;
const locator = require('../data/locator').bugReportDis;
const data = require('../data/test.data').bugReportDis;

describe('Bug Report Disabled State', function () {

    describe('Attachment', function () {

        it('Verify that value displays like a link, and redirects to same web address', function () {
            browser.url('/');
            browser.pause(1000);
            //browser.waitForVisible(locator.email,7000);
            browser.setValue(locator.email,'testingtest@gmail.com');
            browser.setValue(locator.password,'test123');
            browser.click(locator.loginButton);
            browser.pause(1000);
            browser.click(locator.allIssues);
            browser.pause(1000);
            console.log('IRA');
            console.log(locator.chooseBug);
            console.log('tbody span'[8]);
            console.log('tbody span'[9]);
            console.log('tbody span'[10]);
            browser.click(locator.chooseBug);


            browser.pause(1000);

            let linkExists = browser.getAttribute(locator.attachment, 'href');
            assert.equal(linkExists, data.attachment, 'Link does NOT Exist');
            //bowser.click(locator.)
            browser.getURL();

            var selectBox = $('#selectbox');
            console.log(selectBox.getText('option:checked')); // returns "uno"

            selectBox.selectByVisibleText('cuatro');
            console.log(selectBox.getText('option:checked')); // returns "cuatro"
            browser.click(locator.allIssues);
            let screenShotUrl = browser.getUrl();
            assert.equal(screenShotUrl, data.attachment, 'Link does NOT Exist');
            
        });
        //
        // it('Empty field should cause error message', function () {
        //     browser.clearElement(locator.registrationPage.firstName);
        //     browser.click(locator.registrationPage.registerButton);
        //     browser.waitForVisible(locator.registrationPage.errorMessage,7000);
        //     let error = browser.getText(locator.registrationPage.errorMessage);
        //     assert.equal(error, data.emptyFieldError);
        // });
        //

    });
    
});