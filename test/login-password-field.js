const assert = require('chai').assert;
const data = require('../data/test.data').loginPage;
const locator = require('../data/locator').loginPage;

describe('Password field', function() {

  it('Password field should be empty', function() {
    browser.url('/');
    let passwordFieldValue = browser.getValue('.form-control');
    assert.equal(passwordFieldValue, '', 'Password field is NOT empty')
  });

  it('Password placeholder should be "Password *"', function() {
    let passwordFieldPlaceholder = browser.getAttribute(locator.password, 'placeholder');
    assert.equal(passwordFieldPlaceholder, data.passwordPlaceholderText, 'Password field placeholder is NOT correct')
  });

  it('Password placeholder field Font Size', function() {
    let fontSize = browser.getCssProperty(locator.password, 'font-size').value;
    assert.equal(fontSize, data.passwordFieldFontSize, 'Password field Font Size is NOT correct')
  });

  it('Password placeholder field Font Family', function() {
    let fontFamily = browser.getCssProperty(locator.password, 'font-family').value;
    assert.equal(fontFamily, data.passwordFieldFontFamily, 'Password field Font Family is NOT correct')
  });

  it('Password placeholder field Font Weight', function() {
    let fontWeight = browser.getCssProperty(locator.password, 'font-weight').value;
    assert.equal(fontWeight, data.passwordFieldFontWeight, 'Password field Font Weight is NOT correct')
  });

  it('Password placeholder field Font Color', function() { //tip: locator for it - .form-control::placeholder
    let fontColor = browser.getCssProperty(locator.password, 'color').parsed.hex;
    assert.equal(fontColor, data.passwordFieldFontColor, 'Password field Font Color is NOT correct')
  });

  it('Password field First Symbol Font Color', function() {
    let fontFamily = browser.getCssProperty(locator.password, 'font-family').value;
    assert.equal(fontFamily, data.passwordFieldFontFamily, 'Password field First Symbol Font Color is NOT correct')
  });

  it('Password field First Symbol Focus Highlight Color', function() { //tip: use locator - .form-control:focus; property - box-shadow:
    let fontFamily = browser.getCssProperty(locator.password, 'font-family').value;
    assert.equal(fontFamily, data.passwordFieldFontFamily, 'Password field First Symbol Focus Highlight Color is NOT correct')
  });


});