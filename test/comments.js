const assert = require('chai').assert;
const data = require('../data/test.data').comments;
const locator = require('../data/locator');

describe('bug-report-form-edit-mode-comments', function () {

    describe('New Comment field', function () {

        it(`Verify that Font Family is ${data.fontFamily}`, function () {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.email, 2000);
            browser.setValue(locator.loginPage.email, 'tester@test.com');
            browser.setValue(locator.loginPage.password, 'test');
            browser.click(locator.loginPage.loginButton);
            browser.waitForVisible(locator.bugReportEditMode.allIssuesBtn, 2000);
            browser.click(locator.bugReportEditMode.allIssuesBtn);
            browser.waitForVisible(locator.bugReportEditMode.testTitle, 2000);
            browser.click(locator.bugReportEditMode.testTitle);
            let fontFamily = browser.getCssProperty(locator.bugReportEditMode.addComment, 'font-family');
            assert.equal(fontFamily.value, data.fontFamily, 'Font family is incorrect');
        });

        it(`Verify that Font Size is ${data.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.bugReportEditMode.addComment, 'font-size');
            assert.equal(fontSize.value, data.fontSize, 'Font size is incorrect');
        });

        it(`Verify that Font Weight is ${data.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.bugReportEditMode.addComment, 'font-weight');
            assert.equal(fontWeight.value, data.fontWeight, 'Font weight is incorrect');
        });

        it(`Verify that Font Color is ${data.fontColor}`, function () {
            let fontColor = browser.getCssProperty(locator.bugReportEditMode.addComment, 'color');
            assert.equal(fontColor.value, data.fontColor, 'Font color is incorrect');
        });

        it(`Verify that text aligned to the ${data.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.bugReportEditMode.addComment, 'text-align');
            assert.equal(textAlign.value, data.textAlign, `Text is not aligned to the ${data.textAlign}`);
        });

        it('Verify that width is 100%', function () {
            let siteWidth = browser.getElementSize('.container.font-segoe-ui', 'width') - 30;
            let elementWidth = browser.getElementSize(locator.bugReportEditMode.addComment, 'width');
            assert.equal(elementWidth, siteWidth, 'Width is not 100%');

        });

        it(`Verify that background color: ${data.backgroundColor}`, function () {
            let backgroundColor = browser.getCssProperty(locator.bugReportEditMode.addComment, 'background-color');
            assert.equal(backgroundColor.value, data.backgroundColor, `Background color is not ${data.backgroundColor}`);
        });

        it(`Verify that border color: ${data.borderColor}`, function () {
            let borderColor = browser.getCssProperty(locator.bugReportEditMode.addComment, 'border-color');
            assert.equal(borderColor.value, data.borderColor, `Border color is not ${data.borderColor}`);
        });

        it(`Verify that placeholder: ${data.placeholder}`, function () {
            browser.clearElement(locator.bugReportEditMode.addComment);
            let placeholderText = browser.getAttribute(locator.bugReportEditMode.addComment, 'placeholder');
            assert.equal(placeholderText, data.placeholder, `Placeholder is not ${data.placeholder}`);
        });
    });
    describe('Add button', function () {
        it(`Verify that the button is ${data.addButton.buttonAlign}`, function () {
            let buttonAlign = browser.getCssProperty(locator.bugReportEditMode.addButton, 'float');
            assert.equal(buttonAlign.value, data.addButton.buttonAlign, `Button is not aligned to ${data.addButton.buttonAlign}`);
        });
        it(`Verify that background color is ${data.addButton.backgroundColor}`, function () {
            let backgroundColor = browser.getCssProperty(locator.bugReportEditMode.addButton, 'background-color');
            assert.equal(backgroundColor.value, data.addButton.backgroundColor, 'Background color is incorrect');
        });
        it(`Verify that the font family is ${data.addButton.fontFamily}`, function () {
            let fontFamily = browser.getCssProperty(locator.bugReportEditMode.addButton, 'font-family');
            assert.equal(fontFamily.value, data.addButton.fontFamily, `Font family is not ${data.addButton.fontFamily}`);
        });
        it(`Verify that the font size is ${data.addButton.fontSize}`, function () {
            let fontSize = browser.getCssProperty(locator.bugReportEditMode.addButton, 'font-size');
            assert.equal(fontSize.value, data.addButton.fontSize, `Font size is not  ${data.addButton.fontSize}`);
        });
        it(`Verify that the font weight is ${data.addButton.fontWeight}`, function () {
            let fontWeight = browser.getCssProperty(locator.bugReportEditMode.addButton, 'font-weight');
            assert.equal(fontWeight.value, data.addButton.fontWeight, `Font weight is not  ${data.addButton.fontWeight}`);
        });
        it(`Verify that the font color is ${data.addButton.fontWeight}`, function () {
            let fontColor = browser.getCssProperty(locator.bugReportEditMode.addButton, 'color');
            assert.equal(fontColor.value, data.addButton.fontColor, `Font color is not  ${data.addButton.fontColor}`);
        });
        it(`Verify that text align to ${data.addButton.textAlign}`, function () {
            let textAlign = browser.getCssProperty(locator.bugReportEditMode.addButton, 'text-align');
            assert.equal(textAlign.value, data.addButton.textAlign, `Text is not align to  ${data.addButton.textAlign}`);
        });
        it(`Verify that new comment added on the bottom`, function () {
            let randomComment = Math.floor(Math.random() * 10000);
            browser.setValue(locator.bugReportEditMode.addComment, randomComment);
            browser.click(locator.bugReportEditMode.addButton);
            let ver = randomComment.toString();
            browser.pause(1000);
            let lastComment = browser.getText(locator.bugReportEditMode.commentText);
            assert.equal(lastComment[lastComment.length-1], ver, 'Error matherfucker!')
        });
        it(`Verify that after new comment adding the Add Comment field is empty`, function () {
            browser.waitForVisible(locator.bugReportEditMode.addComment, 2000);
            let placeholderCheck = browser.getAttribute(locator.bugReportEditMode.addComment, 'placeholder');
            assert.equal(placeholderCheck, data.placeholder, `The Add comment field is empty`);
        });
        it(`Verify that empty comment can be added`, function () {
            let emp = '';
            browser.setValue(locator.bugReportEditMode.addComment, emp);
            browser.click(locator.bugReportEditMode.addButton);
            browser.pause(1000);
            let emptyMessage = browser.getText(locator.bugReportEditMode.commentText);
            browser.pause(1000);
            assert.equal(emptyMessage[emptyMessage.length-1], emp, `The empty comment wasn't added`);
        });
    });
});