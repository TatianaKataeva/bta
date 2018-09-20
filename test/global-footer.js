const assert = require('chai').assert;
const data = require('../data/test.data').globalFooter;
const locator = require('../data/locator').globalFooter;

describe('Global Footer', function () {

    it('Footer Title', function () {
        browser.url('/');
        let title = browser.getText(locator.footer);
        assert.equal(title, data.footerTitle, 'Footer title is incorrect')
    });

    it('Footer Font Size', function () {
        let fontSize = browser.getCssProperty(locator.footerText, 'font-size').value;
        assert.equal(fontSize, data.footerFontSize, 'Footer Font Size is incorrect')
    });

    it('Footer Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.footerText, 'font-weight').value;
        assert.equal(fontWeight, data.fontWeight, 'Footer Font Weight is incorrect')
    });

    it('Footer Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.footerText, 'font-family').value;
        assert.equal(fontFamily, data.fontFamily, 'Footer Font Family is incorrect')
    });

    it('Footer Color', function () {
        let color = browser.getCssProperty(locator.footer, 'background-color').value;
        assert.equal(color, data.footerColor, 'Footer color is incorrect')
    });

    it('Footer Text Color', function () {
        let colorText = browser.getCssProperty(locator.footer, 'color').parsed.hex;
        assert.equal(colorText, data.fontColor, 'Header Text color is incorrect')
    });

});