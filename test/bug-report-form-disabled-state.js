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


