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

  it('Header Color', function () {
    let color = browser.getCssProperty(locator.header, 'background-color').value;
    assert.equal(color, data.headerColor, 'Header color is incorrect')
  });

});