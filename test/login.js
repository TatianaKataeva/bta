const assert = require('chai').assert;
const data = require('../data/test.data').loginPage;
const locator = require('../data/locator').loginPage;

describe('Elements present subsuite', function () {

    it('Email field is visible', function () {
        browser.url('/');
        browser.pause(5000);
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
    describe('Email field subsuite', function () {

        it('Email field should be empty', function () {
        let emailFieldValue = browser.getValue(locator.email);
        assert.equal(emailFieldValue,'', 'Email field is NOT empty')
        });

        it('Email placeholder should be "Email *"', function () {
            let emailFieldPlaceholder = browser.getAttribute(locator.email,'placeholder');
            assert.equal(emailFieldPlaceholder,data.emailPlaceholder, 'Email field placeholder is NOT correct')
        });
    // it('Header Font Size', function () {
    //     let fontSize = browser.getCssProperty(locator.headerText, 'font-size').value;
    //     assert.equal(fontSize, data.headerFontSize, 'Header Font Size is incorrect')
    // });
    //
    // it('Header Font Weight', function () {
    //     let fontWeight = browser.getCssProperty(locator.headerText, 'font-weight').value;
    //     assert.equal(fontWeight, data.fontWeight, 'Header Font Weight is incorrect')
    // });
    //
    // it('Header Font Family', function () {
    //     let fontFamily = browser.getCssProperty(locator.headerText, 'font-family').value;
    //     assert.equal(fontFamily, data.fontFamily, 'Header Font Family is incorrect')
    // });
    //
    // it('Header Color', function () {
    //     let color = browser.getCssProperty(locator.header, 'background-color').value;
    //     assert.equal(color, data.headerColor, 'Header color is incorrect')
    // });
    //
    // it('Header Image Size', function () {
    //     let imageSizeObject = browser.element(locator.headerImage).getElementSize();
    //     let imageSize = `${imageSizeObject.width}x${imageSizeObject.height}`;
    //     assert.equal(imageSize, data.imageSize, 'Header Image Size is incorrect')
    // });
    //
    // it('Header Text and Image is center aligned', function () {
    //     let align = browser.getCssProperty(locator.headerText, 'text-align').value;
    //     assert.equal(align, data.textAlign, 'Header Text and Image is NOT center aligned')
    // });

});