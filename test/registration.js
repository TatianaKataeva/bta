const assert = require('chai').assert;
const data = require('../data/test.data').registration;
const locator = require('../data/locator').registration;
describe('Registration page', function () {

    describe('Registration', function () {

        it('Correct Page', function () {
            browser.url('/');
            browser.pause(1000);
            browser.click('#registration');
            let regPageVis = browser.isVisible(locator.pageName);
            assert.isTrue(regPageVis, 'Registration Page is not Visible');
        });

        it('Availability back button', function () {
            browser.url('/');
            browser.pause(1000);
            browser.click('#registration');
            let buttomVis = browser.isVisible(locator.buttom);
            assert.isTrue(buttomVis, 'Back button is not Visible');
        });

        it('Availability fname field', function () {
            browser.url('/');
            browser.pause(1000);
            browser.click('#registration');
            let fnameVis = browser.isVisible(locator.fnameField);
            assert.isTrue(fnameVis, 'fname field is not Visible');
        });

        it('Availability lname field', function () {
            browser.url('/');
            browser.pause(2000);
            browser.click('#registration');
            let lnameVis = browser.isVisible(locator.lnameField);
            assert.isTrue(lnameVis, 'lname field is not Visible');
        });

        it('Availability Email field', function () {
            browser.url('/');
            browser.pause(2000);
            browser.click('#registration');
            let emailVis = browser.isVisible(locator.EmailField);
            assert.isTrue(emailVis, 'email field is not Visible');
        });

        it('Availability Password field', function () {
            browser.url('/');
            browser.pause(2000);
            browser.click('#registration');
            let passVis = browser.isVisible(locator.PassField);
            assert.isTrue(passVis, 'password field is not Visible');
        });

        it('Availability Required field', function () {
            browser.url('/');
            browser.pause(2000);
            browser.click('#registration');
            let reqVis = browser.isVisible(locator.ReqField);
            assert.isTrue(reqVis, 'Required field is not Visible');
        });

        it('Availability Registration button', function () {
            browser.url('/');
            browser.pause(3000);
            browser.click('#registration');
            let regButtVis = browser.isVisible(locator.RegButtField);
            assert.isTrue(regButtVis, 'Registration button is not Visible');
        });
    });

    
});   
