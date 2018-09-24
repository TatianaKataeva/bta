const assert = require('chai').assert;
const data = require('../data/test.data');
const locator = require('../data/locator');

describe('Text fields', function () {

    describe('Summary field', function () {

        it(`Font family should be ${data.newBugReportPage.fontFamily}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.email);
            browser.setValue(locator.loginPage.email, data.user.email);
            browser.setValue(locator.loginPage.password, data.user.password);
            browser.click(locator.loginPage.loginButton);
            browser.waitForVisible(locator.newBugReportPage.bugReportForm);
            let fontFamily = browser.getCssProperty(locator.newBugReportPage.summaryField, 'font-family');
            assert.equal(fontFamily.value, data.newBugReportPage.fontFamily);
        });

        it(`Font size should be ${data.newBugReportPage.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.newBugReportPage.summaryField, 'font-size');
            assert.equal(fontSize.value, data.newBugReportPage.fontSize);
        });

        it(`Font weight should be ${data.newBugReportPage.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.newBugReportPage.summaryField, 'font-weight');
            assert.equal(fontWeight.value, data.newBugReportPage.fontWeight);
        });

        it(`Font color should be ${data.newBugReportPage.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.newBugReportPage.summaryField, 'color');
            assert.equal(fontColor.value, data.newBugReportPage.fontColor);
        });

        it(`Text align should be ${data.newBugReportPage.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.newBugReportPage.summaryField, 'text-align');
            assert.equal(textAlign.value, data.newBugReportPage.textAlign);
        });

    });

    describe('Steps to reproduce field', function () {

        it(`Font family should be ${data.newBugReportPage.fontFamily}`, function () {
            let fontFamily = browser.getCssProperty(locator.newBugReportPage.stepsToReproduce, 'font-family');
            assert.equal(fontFamily.value, data.newBugReportPage.fontFamily);
        });

        it(`Font size should be ${data.newBugReportPage.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.newBugReportPage.stepsToReproduce, 'font-size');
            assert.equal(fontSize.value, data.newBugReportPage.fontSize);
        });

        it(`Font weight should be ${data.newBugReportPage.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.newBugReportPage.stepsToReproduce, 'font-weight');
            assert.equal(fontWeight.value, data.newBugReportPage.fontWeight);
        });

        it(`Font color should be ${data.newBugReportPage.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.newBugReportPage.stepsToReproduce, 'color');
            assert.equal(fontColor.value, data.newBugReportPage.fontColor);
        });

        it(`Text align should be ${data.newBugReportPage.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.newBugReportPage.stepsToReproduce, 'text-align');
            assert.equal(textAlign.value, data.newBugReportPage.textAlign);
        });

    });

    describe('Actual result field', function () {

        it(`Font family should be ${data.newBugReportPage.fontFamily}`, function () {
            let fontFamily = browser.getCssProperty(locator.newBugReportPage.actualResult, 'font-family');
            assert.equal(fontFamily.value, data.newBugReportPage.fontFamily);

        });

        it(`Font size should be ${data.newBugReportPage.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.newBugReportPage.actualResult, 'font-size');
            assert.equal(fontSize.value, data.newBugReportPage.fontSize);
        });

        it(`Font weight should be ${data.newBugReportPage.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.newBugReportPage.actualResult, 'font-weight');
            assert.equal(fontWeight.value, data.newBugReportPage.fontWeight);
        });

        it(`Font color should be ${data.newBugReportPage.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.newBugReportPage.actualResult, 'color');
            assert.equal(fontColor.value, data.newBugReportPage.fontColor);
        });

        it(`Text align should be ${data.newBugReportPage.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.newBugReportPage.actualResult, 'text-align');
            assert.equal(textAlign.value, data.newBugReportPage.textAlign);
        });

    });

    describe('Expected result field', function () {

        it(`Font family should be ${data.newBugReportPage.fontFamily}`, function () {
            let fontFamily = browser.getCssProperty(locator.newBugReportPage.expectedResult, 'font-family');
            assert.equal(fontFamily.value, data.newBugReportPage.fontFamily);

        });

        it(`Font size should be ${data.newBugReportPage.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.newBugReportPage.expectedResult, 'font-size');
            assert.equal(fontSize.value, data.newBugReportPage.fontSize);
        });

        it(`Font weight should be ${data.newBugReportPage.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.newBugReportPage.expectedResult, 'font-weight');
            assert.equal(fontWeight.value, data.newBugReportPage.fontWeight);
        });

        it(`Font color should be ${data.newBugReportPage.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.newBugReportPage.expectedResult, 'color');
            assert.equal(fontColor.value, data.newBugReportPage.fontColor);
        });

        it(`Text align should be ${data.newBugReportPage.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.newBugReportPage.expectedResult, 'text-align');
            assert.equal(textAlign.value, data.newBugReportPage.textAlign);
        });

    });

    describe('Attachment link field', function () {

        it(`Font family should be ${data.newBugReportPage.fontFamily}`, function () {
            let fontFamily = browser.getCssProperty(locator.newBugReportPage.attachmentLink, 'font-family');
            assert.equal(fontFamily.value, data.newBugReportPage.fontFamily);
        });


        it(`Font size should be ${data.newBugReportPage.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.newBugReportPage.attachmentLink, 'font-size');
            assert.equal(fontSize.value, data.newBugReportPage.fontSize);
        });


        it(`Font weight should be ${data.newBugReportPage.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.newBugReportPage.attachmentLink, 'font-weight');
            assert.equal(fontWeight.value, data.newBugReportPage.fontWeight);
        });

        it(`Font color should be ${data.newBugReportPage.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.newBugReportPage.attachmentLink, 'color');
            assert.equal(fontColor.value, data.newBugReportPage.fontColor);
        });

        it(`Text align should be ${data.newBugReportPage.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.newBugReportPage.attachmentLink, 'text-align');
            assert.equal(textAlign.value, data.newBugReportPage.textAlign);
        });

    });
});

describe('Element presence', function () {

    function getActualPlcHolder(key) {
        return browser.getAttribute(locator.newBugReportPage[key], 'placeholder');
    }

    function getPlaceHolderText(anySelector) {
        return browser.getText(anySelector);
    }

    let arrExp = data.newBugReportPage.placeholder;   //makes an arr with all expected placeholder names
    let arrLocator = ['summaryField', 'stepsToReproduce', 'actualResult',
        'expectedResult', 'attachmentLink',
        locator.newBugReportPage.assigneeDropDownPlaceHolder,
        locator.newBugReportPage.priorityDropDownPlaceHolder,
        locator.newBugReportPage.severityDropDownPlaceHolder,
        locator.newBugReportPage.reproDropDownPlaceHolder,
        locator.newBugReportPage.versionDropDownPlaceHolder];   // makes an arr with parameters needed for 2 functions

    for (let i = 0; i < arrExp.length; i++) {

        it(`Presence of an element with ${arrExp[i]} placeholder`, function () {
            let aPlaceHolder;
            if (i < 5) {
                aPlaceHolder = getActualPlcHolder(arrLocator[i]);
            } else {
                aPlaceHolder = getPlaceHolderText(arrLocator[i]);
            }
            assert.equal(aPlaceHolder, arrExp[i], `Placeholder : ${arrExp[i]} is not displayed`);
        });
    }

});

describe('Redirecting to the New Bug report page', function () {

    it('Page opening from NavBar', function () {
        browser.click(locator.navigationBar.allIssuesButton);
        browser.click(locator.navigationBar.newBugButton);
        let isPresent = browser.isExisting(locator.newBugReportPage.bugReportForm);
        assert.isTrue(isPresent, 'true', 'User is not redirected to the New Bug report page')
    })

});
