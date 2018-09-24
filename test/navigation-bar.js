const assert = require('chai').assert;
const locator = require('../data/locator').loginPage;
const data = require('../data/test.data').loginPageFunctionality;
const nav_bar = require('../data/locator').navigationBar;
const nav_bar_data = require('../data/test.data').navigationBarFunctionality;


describe('Navigation Bur Functionality', function () {

    describe('Login To Product', function () {

        it('User should login to Product', function () {
            browser.url('/');
            browser.waitForVisible(locator.email, 7000);
            browser.setValue(locator.email, 'karabelnikava@gmail.com');
            browser.setValue(locator.password, 'danila');
            browser.click(locator.loginButton);
            browser.waitForVisible(nav_bar.newBugButton, 7000);
            let new_bug_button_text = browser.getText(nav_bar.newBugButton);
            assert.equal(new_bug_button_text, "New Bug", 'Error: Cannot login');
        });
    });

    describe('Verify Navigation Bar style', function () {

        it('Navigation Bar should have 100% Width', function () {
            let barLength = browser.getCssProperty(nav_bar.navigetionBar, 'display').value;
            assert.equal(barLength, nav_bar_data.length, 'Error: navigation bar has not flexible width');
        });
    
        it('Navigation Bar should have three buttons: New Bug, All Issues, Logout', function () {
            assert.isTrue(browser.waitForVisible(nav_bar.newBugButton,7000), 'New Bug button is not displayed');
            assert.isTrue(browser.waitForVisible(nav_bar.allIssuesButton,7000), 'All Issues button is not displayed');
            assert.isTrue(browser.waitForVisible(nav_bar.logoutButton,7000), 'Logout button is not displayed');
        });
    
        it('Navigation Bar should have Background Color as rgba(0,0,0,0.03)', function () {
            let cardFooterList = $$(nav_bar.cardFooter);
            let navBarArea = cardFooterList[1];
            let navBarColor = navBarArea.getCssProperty('background-color')['value'];
            assert.equal(navBarColor, nav_bar_data.navBarColor, 'Error: navigation bar has not flexible width');
        });
        describe('Buttons Font family', function () {
            it('New Bug button should have Font family: Segoe UI', function () {
                let newBugButton = $(nav_bar.newBugButton);
                let newBugButtonFont = newBugButton.getCssProperty('font-family').value;
                assert.equal(newBugButtonFont, nav_bar_data.navBarFont, 'Error: New Bug button has incorrect font');
            });
            it('All Issues button should have Font family: Segoe UI', function () {
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let allIssuesButtonFont = allIssuesButton.getCssProperty('font-family').value;
                assert.equal(allIssuesButtonFont, nav_bar_data.navBarFont, 'Error: All Issues button has incorrect font');
            });
            it('Logout button should have Font family: Segoe UI', function () {
                let logoutButton = $(nav_bar.logoutButton);
                let logoutButtonFont = logoutButton.getCssProperty('font-family').value;
                assert.equal(logoutButtonFont, nav_bar_data.navBarFont, 'Error: button has incorrect font');
            });
        });
    
        describe('Buttons Font size', function () {
            it('New Bug button should have Font size: 16px ', function () {
                let newBugButton = $(nav_bar.newBugButton);
                let newBugButtonFontSize = newBugButton.getCssProperty('font-size').value;
                assert.equal(newBugButtonFontSize, nav_bar_data.navBarFontSize, 'Error: New Bug button has incorrect font-size');
            });
            it('All Issues button should have Font size: 16px ', function () {
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let allIssuesButtonFontSize = allIssuesButton.getCssProperty('font-size').value;
                assert.equal(allIssuesButtonFontSize, nav_bar_data.navBarFontSize, 'Error: All Issues button has incorrect font-size');
            });
            it('Logout button should have Font size: 16px ', function () {
                let logoutButton = $(nav_bar.logoutButton);
                let logoutButtonFontSize = logoutButton.getCssProperty('font-size').value;
                assert.equal(logoutButtonFontSize, nav_bar_data.navBarFontSize, 'Error: Logout button has incorrect font-size');
            });
        });
    
        describe('ButtonsFont weight', function () {
            it('New Bug button should have Font weight: 400 ', function () {
                let newBugButton = $(nav_bar.newBugButton);
                let newBugButtonFontWeight = newBugButton.getCssProperty('font-weight').value;
                assert.equal(newBugButtonFontWeight, nav_bar_data.navBarFontWeight, 'Error: New Bug button has incorrect font-weight');
            });
            it('All Issues button should have Font weight: 400 ', function () {
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let allIssuesButtonFontWeight = allIssuesButton.getCssProperty('font-weight').value;
                assert.equal(allIssuesButtonFontWeight, nav_bar_data.navBarFontWeight, 'Error: All Issues button has incorrect font-weight');
            });
            it('Logout button should have Font weight: 400 ', function () {
                let logoutButton = $(nav_bar.logoutButton);
                let logoutButtonFontWeight = logoutButton.getCssProperty('font-weight').value;
                assert.equal(logoutButtonFontWeight, nav_bar_data.navBarFontWeight, 'Error: Logout button has incorrect font-weight');
            });
        });
    
        describe('Buttons Font color', function () {
            it('New Bug button should have Font color: #fff ', function () {
                let newBugButton = $(nav_bar.newBugButton);
                let newBugButtonFontColor = newBugButton.getCssProperty('color').value;
                console.log(newBugButtonFontColor);
                assert.equal(newBugButtonFontColor, nav_bar_data.navBarButtonsFontColor, 'Error: New Bug button has incorrect color');
            });
            it('All Issues button should have Font color: #fff ', function () {
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let allIssuesButtonFontColor = allIssuesButton.getCssProperty('color').value;
                console.log(allIssuesButtonFontColor);
                assert.equal(allIssuesButtonFontColor, nav_bar_data.navBarButtonsFontColor, 'Error: All Issues button has incorrect color');
            });
            it('Logout button should have Font color: #fff ', function () {
                let logoutButton = $(nav_bar.logoutButton);
                let logoutButtonFontColor = logoutButton.getCssProperty('color').value;
                console.log(logoutButtonFontColor);
                assert.equal(logoutButtonFontColor, nav_bar_data.navBarButtonsFontColor, 'Error: Logout button has incorrect color');
            });
        });
    
        describe('Buttons Background color', function () {
            it('New Bug button should have Background color: #17a2b8', function () {
                let newBugButton = $(nav_bar.newBugButton);
                let newBugButtonBackgroundColor = newBugButton.getCssProperty('background-color').value;
                assert.equal(newBugButtonBackgroundColor, nav_bar_data.BackgroundColor1, 'Error: New Bug button has incorrect Background color');
            });
            it('All Issues button should have Background color: #17a2b8', function () {
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let allIssuesButtonBackgroundColor = allIssuesButton.getCssProperty('background-color').value;
                assert.equal(allIssuesButtonBackgroundColor, nav_bar_data.BackgroundColor1, 'Error: All Issues button has incorrect Background color');
            });
            it('Logout button should have Background color: #6c757d', function () {
                let logoutButton = $(nav_bar.logoutButton);
                let logoutButtonBackgroundColor = logoutButton.getCssProperty('background-color').value;
                assert.equal(logoutButtonBackgroundColor, nav_bar_data.BackgroundColor2, 'Error: Logout button has incorrect Background color');
            });
    
        });

        describe('Buttons Hover background color', function () {
            it(`New Bug button should have Hover background color: ${nav_bar_data.HoverBackgroundColor1}`, function () {
                browser.moveToObject(nav_bar.newBugButton);
                browser.pause(5000);
                let newBugButton = $(nav_bar.newBugButton);
                let hoverColor = newBugButton.getCssProperty('background-color').value;
                assert.equal(hoverColor, nav_bar_data.HoverBackgroundColor1, 'Error: New Bug button has incorrect Hover Background color');
            });
            it(`All Issues button should have Hover background color: ${nav_bar_data.HoverBackgroundColor1}`, function () {
                browser.moveToObject(nav_bar.allIssuesButton);
                browser.pause(5000);
                let allIssuesButton = $(nav_bar.allIssuesButton);
                let hoverColor = allIssuesButton.getCssProperty('background-color').value;
                assert.equal(hoverColor, nav_bar_data.HoverBackgroundColor1, 'Error:All Issues button has incorrect Hover Background color');
            });
            it(`Logout button should have Hover background color: ${nav_bar_data.HoverBackgroundColor2}`, function () {
                browser.moveToObject(nav_bar.logoutButton);
                browser.pause(5000);
                let logoutButton = $(nav_bar.logoutButton);
                let hoverColor = logoutButton.getCssProperty('background-color').value;
                assert.equal(hoverColor, nav_bar_data.HoverBackgroundColor2, 'Error: Logout button has incorrect Hover Background color');
            });

        });
    });

    describe('Verify Navigation', function () {
        it('New Bug button should navigate to New Bug Report page', function () {
            browser.click(nav_bar.newBugButton);
            let submitText = browser.getText(nav_bar.submitButton);
            console.log("submitText", submitText);
        });
        it('All Issues button should navigate to All Issues page', function () {
            browser.click(nav_bar.allIssuesButton);
            let issuesTableVisible = browser.isVisible(nav_bar.issuesTable);
            assert.isTrue(issuesTableVisible, 'All Issues button leads to incorrect page');
        });
        it('Logout button should navigate to Login page', function () {
            browser.click(nav_bar.logoutButton);
            let loginVisible = browser.waitForVisible(locator.loginButton, 7000);
            assert.isTrue(loginVisible, 'Logout button leads to incorrect page');
        });
    });
    
 
});
