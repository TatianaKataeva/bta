const assert = require('chai').assert;
const data = require('../data/test.data').bugReportFormDisabledState;
const locator = require('../data/locator').bugReportFormDisabledState;


describe(`Titles`, function () {

    it('Bug report form font weight', function () {
        browser.url('/');
        browser.waitForVisible(locator.email);
        browser.setValue(locator.email,'tester@test.com');
        browser.setValue(locator.password,'test');
        browser.click(locator.loginButton);
        browser.waitForVisible(locator.allIssues);
        browser.click(locator.allIssues);
        browser.waitForVisible(locator.bugSummary);
        $(locator.bugSummary).click();
        browser.waitForVisible(locator.titleFont);
        let fontWeight = browser.getCssProperty(locator.titleFont, 'font-weight').value;
        assert.equal(fontWeight, data.fontWeight, 'Bug report form font weight is incorrect');
    });

    it('Bug report form font family', function () {
        let fontFamily = browser.getCssProperty(locator.titleFont, 'font-family').value;
        assert.equal(fontFamily, data.fontFamily, 'Bug report form font family is incorrect');
    });

    it('Bug report form font size', function () {
        let fontSize = browser.getCssProperty(locator.titleFont, 'font-size').value;
        assert.equal(fontSize, data.fontSize, 'Bug report form font size is incorrect');
    });

    it('Bug report form font color', function () {
        let color = browser.getCssProperty(locator.titleFont, 'color').value;
        assert.equal(color, data.fontColor, 'Bug report form font color is incorrect');
    });
});


    describe(`Values`, function () {

        it('Bug report form font weight', function () {
            let fontWeightValues = browser.getCssProperty(locator.valueFont, 'font-weight').value;
            assert.equal(fontWeightValues, data.fontWeightValue, 'Bug report form font weight is incorrect');
        });

        it('Bug report form font family', function () {
            let fontFamilyValues = browser.getCssProperty(locator.valueFont, 'font-family').value;
            assert.equal(fontFamilyValues, data.fontFamilyValue, 'Bug report form font family is incorrect');
        });

        it('Bug report form font size', function () {
            let fontSizeValues = browser.getCssProperty(locator.valueFont, 'font-size').value;
            assert.equal(fontSizeValues, data.fontSizeValue, 'Bug report form font size is incorrect');
        });

        it('Bug report form font color', function () {
            let colorValues = browser.getCssProperty(locator.valueFont, 'color').value;
            assert.equal(colorValues, data.fontColorValue, 'Bug report form font color is incorrect');
        });

    });
describe('Bug Report Disabled State', function () {

    describe('Attachment', function () {

        it('Verify that value displays like a link, and redirects to same web address', function () {
            browser.url('/');
            browser.waitForVisible(locator.email,1000);
            browser.setValue(locator.email,'testingtest@gmail.com');
            browser.setValue(locator.password,'test123');
            browser.click(locator.loginButton);
            browser.waitForVisible(locator.allIssues,1000);
            browser.click(locator.allIssues);
            browser.waitForVisible(locator.chooseBug,1000);
            browser.click(locator.chooseBug);
            browser.waitForVisible(locator.bugReportDisbForm,1000);
            browser.pause(1000);

            let linkText = browser.getText(locator.attachment);
            let link = browser.getAttribute(data.attachment, 'href');
            assert.equal(link, linkText, 'link does NOT point to same website as shown in attachment ')

        });

        it('Verify that Font-weight is equal to data.fontWeightAttach', function () {
            let fontWeight = browser.getCssProperty(locator.attachment, 'font-weight').value;
            assert.equal(fontWeight, data.fontWeightAttach, 'Header Font Weight is incorrect')

        });

        it('Verify that Font- family is data.fontFamilyAttach.toLowerCase()', function () {
            let fontFamily = browser.getCssProperty(locator.attachment, 'font-family').value;
            assert.equal(fontFamily, data.fontFamilyAttach.toLowerCase(), 'Header Font Family is incorrect')
        });

        it('Verify that Font-size is data.fontSizeAttach', function () {
            let fontSize = browser.getCssProperty(locator.attachment, 'font-size').value;
            assert.equal(fontSize, data.fontSizeAttach, 'Header Font Size is incorrect')
        });


    });
    describe('Steps to Reproduce', function () {


        it('Verify that value displayed as multiline text area', function () {
            let rowNum = Number(browser.getAttribute(locator.textArea, 'rows')[0]);
            assert.isAtLeast(rowNum, data.minRowReq);
        });

        it('Verify that Background-color is equal to data.backColorSteps', function () {
            let backColor = browser.getCssProperty(locator.textArea, 'background-color')[0].value;
            assert.equal(backColor, data.backColorSteps, 'Background Color is Incorrect');
        });

        it('Verify that width is equal to widthText', function () {
            let siteWidth = browser.getElementSize('.container.font-segoe-ui', 'width') - 30; //remove padding -30
            let widthText = Number(browser.getCssProperty(locator.textArea, 'width')[0].value.slice(0,-2)); //remove px and convert to num
            assert.equal( widthText, siteWidth, 'Width of textbox is Incorrect');
            console.log(siteWidth);

        });


        it('Verify that Border-color is equal to data.borderColor', function () {
            let borderColor =browser.getCssProperty(locator.textArea, 'border-color')[0].value;
            assert.equal(borderColor, data.borderColor, 'Incorrect Border Color');
        });

    });
    
});


