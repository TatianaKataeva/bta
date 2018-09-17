const assert = require('chai').assert;
const locator = require('../data/locator').bugReportFormDisabledState;
const data = require('../data/test.data').bugReportFormDisabledState;

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
            browser.click(locator.chooseBug);
            browser.pause(1000);

            let linkText = browser.getText(locator.attachment);
            let link = browser.getAttribute(data.attachment, 'href');
            assert.equal(link, linkText, 'link does NOT point to same website as shown in attachment ')

        });

        it('Verify that Font-weight is 400', function () {
            let fontWeight = browser.getCssProperty(locator.attachment, 'font-weight').value;
            assert.equal(fontWeight, data.fontWeightAttach, 'Header Font Weight is incorrect')

        });

        it('Verify that Font- family is Segoe UI', function () {
            let fontFamily = browser.getCssProperty(locator.attachment, 'font-family').value;
            assert.equal(fontFamily, data.fontFamilyAttach.toLowerCase(), 'Header Font Family is incorrect')
        });

        it('Verify that Font-size is 16px', function () {
            let fontSize = browser.getCssProperty(locator.attachment, 'font-size').value;
            assert.equal(fontSize, data.fontSizeAttach, 'Header Font Size is incorrect')
        });


    });
    describe('Steps to Reproduce', function () {


        it('Verify that value displayed as multiline text area', function () {
            let rowNum = Number(browser.getAttribute(locator.textArea, 'rows')[0]);
            assert.isAtLeast(rowNum, data.minRowReq);
        });

        it('Verify that Background-color is #e9ecef33', function () {
            //console.log(browser.getCssProperty(locator.textArea, 'background-color')[0].parsed.hex);
            let backColor = browser.getCssProperty(locator.textArea, 'background-color')[0].value;
            assert.equal(backColor, data.backColorSteps, 'Background Color is Incorrect');
        });

        it('Verify that width is 100%', function () {

            let size = browser.getViewportSize('width');


            let widthText = browser.getCssProperty(locator.textArea, 'width')[0].value;
            assert.equal(size, widthText, 'Width of textbox is Incorrect');
        });


        it('Verify that Border-color is rgba(0,0,0,0.5)', function () {
            let borderColor =browser.getCssProperty(locator.textArea, 'border-color')[0].value;
            assert.equal(borderColor, data.borderColor);
        });

    });
    
});