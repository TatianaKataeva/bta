const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;

describe('Login Functionality', function () {

    describe('Email Field', function () {

        it('User can enter 1 symbol', function () {
            browser.url('/');
            browser.pause(2000);
            browser.setValue(locator.email,'1');
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 1);
        });

        it('User can enter 22 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a'.repeat(22));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 22);
        });

        it('User can enter 45 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'n'.repeat(45));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 45);
        });

        it('User can\'t enter 46 symbols', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'x'.repeat(46));
            let input = browser.getValue(locator.email);
            assert.equal(input.length, 45);
        });

        it('Empty email field should cause error message', function () {
            browser.clearElement(locator.email);
            browser.click(locator.loginButton);
            browser.pause(1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, 'Specify email and password');
        });

        it('Unregistered email should cause error message', function () {
            browser.clearElement(locator.email);
            browser.setValue(locator.email,'a@nn.a');
            browser.setValue(locator.password,'1');
            browser.click(locator.loginButton);
            browser.pause(1000);
            let error = browser.getText(locator.errorMessage);
            assert.equal(error, 'User with this email does not exist');
        });
    });
      describe('Password Field', function () {

            it('User can enter 1 any symbol', function () {

                browser.setValue(locator.password,'9');
                let input = browser.getValue(locator.password);
                assert.equal(input, '9');
            });

            it('User can enter 22 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'9'.repeat(45));
                let input = browser.getValue(locator.password);
                assert.equal(input,'9'.repeat(45));
            });

            it('User can enter 45 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'A'.repeat(23));
                let input = browser.getValue(locator.password);
                assert.equal(input, 'A'.repeat(23));
            });

            it('User can\'t enter 46 symbols', function () {
                browser.clearElement(locator.password);
                browser.setValue(locator.password,'Z'.repeat(46));
                let input = browser.getValue(locator.password);
                assert.equal(input.length, 45);
            });

           it('Empty password field should cause error message', function () {
                  browser.refresh();
                  browser.pause(2000);

                  browser.click(locator.loginButton);
                  //browser.pause(5000);
                  browser.waitForText(locator.errorMessage, 2000);;
                  let error = browser.getText(locator.errorMessage);
                  //browser.pause(5000);
                  assert.equal(error,'Specify email and password', 'мое сообщение');
            });

            it('Registered but not matching password should cause error message', function () {
                browser.clearElement(locator.email);
                browser.setValue(locator.email,'ipvola@gmail.com');
                browser.setValue(locator.password,'1');
                browser.click(locator.loginButton);
                browser.pause(1000);
                let error = browser.getText(locator.errorMessage);
                assert.equal(error, 'Password is incorrect');
            });
            it('All symbols in password field are replaced by bullet', function () {
                            let type=browser.getAttribute(locator.password,'type');
                            assert.equal(type, 'password');
                        });
        });
});