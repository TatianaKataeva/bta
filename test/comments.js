const assert = require('chai').assert;
const data = require('../data/test.data');
const locator = require('../data/locator');
const comm_titles = require('../data/test.data').commentsModule.commTitle;
const font_size = require('../data/test.data').commentsModule.fontSize;
const font_weight = require('../data/test.data').commentsModule.titleFontWeight;
const font_family = require('../data/test.data').commentsModule.fontFamily;
const font_color = require('../data/test.data').commentsModule.fontColor;
const text_align = require('../data/test.data').commentsModule.textAlign;
const no_comm_titles = require('../data/test.data').commentsModule.noCommentsTitle;

describe('Module Comments', function () {


        it('Comments Module has Add button', function () {
        browser.url('/');
        browser.waitForVisible(locator.loginPage.email, 5000);
        browser.setValue(locator.loginPage.email, 'tester@test.com');
        browser.setValue(locator.loginPage.password, 'test');
        browser.click(locator.loginPage.loginButton);
        browser.waitForVisible(locator.commentsModule.allIssuesBtn, 2000);
        browser.click(locator.commentsModule.allIssuesBtn);
        browser.waitForVisible(locator.commentsModule.bugTitle, 2000);
        browser.click(locator.commentsModule.bugTitle);
        // browser.pause(7000)
        //browser.waitForVisible(locator.btnAdd);
        let btnAdd = browser.isVisible(locator.commentsModule.btnAdd);
        assert.isTrue(btnAdd, 'Button Add is NOT Visible');
        });

        it('Comments Module has title ${dada.commentsModule.commentsTitle}', function () {
        let commentsTitle = browser.getText(locator.commentsModule.commentsTitle);
        assert.equal(commentsTitle, comm_titles, 'Wrong comments title');
        });

        it('Comments Module has new comment text area', function () {
        let newComment = browser.isVisible(locator.commentsModule.newCommentsTextArea);
        assert.isTrue(newComment, 'New comment text field is NOT Visible');
        });

        it(`Verify that module has List of comments`, function () {
            let listOfComments = $$("#comment");
            assert.notEqual(listOfComments.length, 1, 'No list of comments')
        });
});

describe('Title', function () {

    
    it('Title is static text', function () {
        let titleTag = browser.getTagName(locator.commentsModule.commentsTitle);
        assert.equal(titleTag, "p", 'Title Font Size is NOT correct');
    });

    it('Title Font Size', function () {
        let fontSize = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-size').value;
        assert.equal(fontSize, font_size, 'Title Font Size is NOT correct');
    });

    it('Title Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-weight').value;
        assert.equal(fontWeight, font_weight, 'Title Font Weight is NOT correct');
    });

    it('Title Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-family').value;
        assert.equal(fontFamily, font_family, 'Title Font Family is NOT correct');
    });

    it('Title Font Color', function () {
        let fontColor = browser.getCssProperty(locator.commentsModule.commentsTitle, 'color').parsed.hex;
        assert.equal(fontColor, font_color, 'Title Font Color is NOT correct');
    });

    it('Text align', function () {
        let Align = browser.getCssProperty(locator.commentsModule.commentsTitle, 'text-align').value;
        assert.equal(Align, text_align, 'Title Color is NOT correct');
    });

});

describe('List of comments (empty)', function () {

    it('Title Font Size', function () {
        browser.click(locator.commentsModule.allIssuesBtn);
        browser.waitForVisible(locator.commentsModule.bugTitleEmpty, 2000);
        browser.click(locator.commentsModule.bugTitleEmpty);
        let fontSize = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-size').value;
        assert.equal(fontSize, font_size, 'Title Font Size is NOT correct');
    });

    it('Title Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-weight').value;
        assert.equal(fontWeight, font_weight, 'Title Font Weight is NOT correct');
    });

    it('Title Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.commentsModule.commentsTitle, 'font-family').value;
        assert.equal(fontFamily, font_family, 'Title Font Family is NOT correct');
    });

    it('Title Font Color', function () {
        let fontColor = browser.getCssProperty(locator.commentsModule.commentsTitle, 'color').parsed.hex;
        assert.equal(fontColor, font_color, 'Title Font Color is NOT correct');
    });

    it('Text align', function () {
        let Align = browser.getCssProperty(locator.commentsModule.commentsTitle, 'text-align').value;
        assert.equal(Align, text_align, 'Title Color is NOT correct');
    });

    it('Comments Module has sighn under title ${dada.commentsModule.noComments}', function () {
        let commentsUnderTitle = browser.getText(locator.commentsModule.noComments);
        assert.equal(commentsUnderTitle, no_comm_titles, 'Wrong under comments title');
    });

});