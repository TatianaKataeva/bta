const assert = require('chai').assert;
const data = require('../data/test.data').loginPage;
const locator = require('../data/locator').loginPage;

describe('Elements present', function () {

    it('Email field is visible', function () {
        browser.url('/');
        browser.waitForVisible(locator.email);
        let emailField = browser.isVisible(locator.email);
        assert.isTrue(emailField, 'Email field is NOT Visible');
    });

    it('Password field is visible', function () {
        let passwordField = browser.isVisible(locator.password);
        assert.isTrue(passwordField, 'Password field is NOT Visible');
    });

    it('"*Required field” text is visible', function () {
        let requiredText = browser.isVisible(locator.requiredText);
        assert.isTrue(requiredText, '"*Required field" text is NOT Visible');
    });

    it('Login button is visible', function () {
        let loginButton = browser.isVisible(locator.loginButton);
        assert.isTrue(loginButton, 'Login button is NOT Visible');
    });

    it('Registration button is visible', function () {
        let registrationButton = browser.isVisible(locator.registrationButton);
        assert.isTrue(registrationButton, 'Registration button is NOT Visible');
    });
});

describe('Email field', function () {

    it('Email field should be empty', function () {
        let emailFieldValue = browser.getValue(locator.email);
        assert.equal(emailFieldValue, '', 'Email field is NOT empty');
    });

    it('Email placeholder should be "Email *"', function () {
        let emailFieldPlaceholder = browser.getAttribute(locator.email, 'placeholder');
        assert.equal(emailFieldPlaceholder, data.emailPlaceholderText, 'Email field placeholder is NOT correct');
    });
    it('Email field Font Size', function () {
        let fontSize = browser.getCssProperty(locator.email, 'font-size').value;
        assert.equal(fontSize, data.emailFieldFontSize, 'Email field Font Size is NOT correct');
    });

    it('Email field Font Weight', function () {
        let fontWeight = browser.getCssProperty(locator.email, 'font-weight').value;
        assert.equal(fontWeight, data.emailFieldFontWeight, 'Email field Font Weight is NOT correct');
    });

    it('Email field Font Family', function () {
        let fontFamily = browser.getCssProperty(locator.email, 'font-family').value;
        assert.equal(fontFamily, data.emailFieldFontFamily, 'Email field Font Family is NOT correct');
    });

    it('Email field Font Color', function () {
        let fontColor = browser.getCssProperty(locator.email, 'color').parsed.hex;
        assert.equal(fontColor, data.emailFieldFontColor, 'Email field Font Color is NOT correct');
    });
});