const assert = require('chai').assert;
const data = require('../data/test.data').client;
const locator = require('../data/locator').client;

describe('Client', function () {

  it('Page Title', function () {
    browser.url('/Bug-Tracker');
    let title = browser.getTitle();
    assert.equal(title, data.pageTitle, 'Title is incorrect');
  });

  it('Global Header Visible', function () {
    let headerVisible = browser.isVisible(locator.header);
    assert.isTrue(headerVisible, 'Global Header NOT Visible');
  });

  it('App Visible', function () {
    let appVisible = browser.isVisible(locator.app);
    assert.isTrue(appVisible, 'App NOT Visible');
  });

  it('Global Footer Visible', function () {
    let footerVisible = browser.isVisible(locator.footer);
    assert.isTrue(footerVisible, 'Global Footer NOT Visible');
  });

});