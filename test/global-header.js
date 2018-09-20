const assert = require('chai').assert;
const data = require('../data/test.data').globalHeader;
const locator = require('../data/locator').globalHeader;

describe('Global Header', function () {

    it('Header Title', function () {
        browser.url('/');
        let title = browser.getText(locator.header);
        assert.equal(title, data.headerTitle, 'Header title is incorrect')
    });

    it('Header Font Size', function () {
        let fontSize = browser.getCssProperty(locator.headerText, 'font-size').value;
        assert.equal(fontSize, data.headerFontSize, 'Header Font Size is incorrect')
    });

    it('Header Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.headerText, 'font-weight').value;
        assert.equal(fontWeight, data.fontWeight, 'Header Font Weight is incorrect')
    });

    it('Header Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.headerText, 'font-family').value;
        assert.equal(fontFamily, data.fontFamily, 'Header Font Family is incorrect')
    });

    it('Header Color', function () {
        let color = browser.getCssProperty(locator.header, 'background-color').value;
        assert.equal(color, data.headerColor, 'Header color is incorrect')
    });

    it('Header Image Size', function () {
        let imageSizeObject = browser.element(locator.headerImage).getElementSize();
        let imageSize = `${imageSizeObject.width}x${imageSizeObject.height}`;
        assert.equal(imageSize, data.imageSize, 'Header Image Size is incorrect')
    });

    it('Header Text and Image is center aligned', function () {
        let align = browser.getCssProperty(locator.headerText, 'text-align').value;
        assert.equal(align, data.textAlign, 'Header Text and Image is NOT center aligned')
    });

});