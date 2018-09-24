const assert = require('chai').assert;
const data = require('../data/test.data').client;
const locator = require('../data/locator').client;
//const viewport = require('../data/viewport');

//for(let i in viewport){

describe(`Client`, function () {

    it('Page Title', function () {
        browser.url('/');
        //browser.setViewportSize(viewport[i]);
        let title = browser.getTitle();
        assert.equal(title, data.pageTitle, 'Title is incorrect');
    });

    it('Favicon exist', function () {
        let favicon = browser.getAttribute(locator.favicon, 'href');
        assert.equal(favicon, data.faviconLink, 'Favicon does NOT Exist');
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

//}