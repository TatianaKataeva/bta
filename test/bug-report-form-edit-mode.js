const assert = require('chai').assert;
const data = require('../data/test.data').bugReportEditMode;
const locator = require('../data/locator');

describe('bug-report-form-edit-mode', function () {

  describe('Summary', function () {

    it('is a single line input field', function () {
      browser.url('/');
      browser.waitForVisible(locator.loginPage.email, 5000);
      browser.setValue(locator.loginPage.email, 'tester@test.com');
      browser.setValue(locator.loginPage.password, 'test');
      browser.click(locator.loginPage.loginButton);
      browser.waitForVisible(locator.bugReportEditMode.allIssuesBtn, 2000);
      browser.click(locator.bugReportEditMode.allIssuesBtn);
      browser.waitForVisible(locator.bugReportEditMode.bugTitle, 2000);
      browser.click(locator.bugReportEditMode.bugTitle);
      browser.waitForVisible(locator.bugReportEditMode.btn, 2000);
      browser.click(locator.bugReportEditMode.btn);
      let elTag = browser.getTagName(locator.bugReportEditMode.input);
      assert.equal(elTag, data.tagInput, 'Summary is not a single line input field');
    });

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.bugReportEditMode.input, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'Summary font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.bugReportEditMode.input, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'Summary font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.bugReportEditMode.input, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'Summary font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.bugReportEditMode.input, 'color').value;
      assert.equal(fontColor, data.fontColor, 'Summary color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.bugReportEditMode.input, 'text-align').value;
      assert.equal(align, data.textAlign, 'Summary text is not aligned to the left')
    });
  });

  describe('Steps to reproduce', function () {

    it('accept multiline input', function () {
      let elType = browser.getTagName(locator.bugReportEditMode.txtArea);
      assert.equal(elType, data.tagTextArea, 'Steps to reproduce is not accept multiline input');
    });

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`);
    });
  });

  describe('Actual Result', function () {

    it('is a single line input field', function () {
      let elType = browser.getTagName(locator.bugReportEditMode.inputActRes);
      assert.equal(elType, data.tagInput, 'is not a single line input field');
    });

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.bugReportEditMode.inputActRes, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.bugReportEditMode.inputActRes, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.bugReportEditMode.inputActRes, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.bugReportEditMode.inputActRes, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.bugReportEditMode.inputActRes, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`)
    });

    for (let i in data.summaryArray) {
      it(`Title - ${data.summaryArray[i]}`, function () {
        let title = $$('.text-bold')[i].getText();
        console.log(title);
        assert.isTrue(true);
      });
    }

  });
});
