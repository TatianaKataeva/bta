const assert = require('chai').assert;
const data = require('../data/test.data').bugReportEditMode;
const locator = require('../data/locator').bugReportEditMode;
const locator2 = require('../data/locator').bugReportTitles;
const locator3 = require('../data/locator').loginPage;


describe('bug-report-form-edit-mode', function () {

  describe('Summary', function () {

    it(`Page has the same titles as in Default State`, function () {
      browser.url('/');
      browser.waitForVisible(locator3.email,5000);
      browser.setValue(locator3.email,'tester@test.com');
      browser.setValue(locator3.password,'test');
      browser.click(locator3.loginButton);
      browser.waitForVisible(locator.btnAllIssues,2000);
      browser.click(locator.btnAllIssues);
      browser.waitForVisible(locator.bugTitle,2000);
      browser.click(locator.bugTitle);
      const arrDefault = [];
      const arrEdit = [];
      arrDefault.push(browser.getText(locator2.summary));
      arrDefault.push(browser.getText(locator2.stepsToRep));
      arrDefault.push(browser.getText(locator2.actRes));
      arrDefault.push(browser.getText(locator2.expRes));
      arrDefault.push(browser.getText(locator2.attach));
      arrDefault.push(browser.getText(locator2.comments));

      browser.waitForVisible(locator.btnEdit,2000);
      browser.click(locator.btnEdit);

      arrEdit.push(browser.getText(locator2.summary));
      arrEdit.push(browser.getText(locator2.stepsToRep));
      arrEdit.push(browser.getText(locator2.actRes));
      arrEdit.push(browser.getText(locator2.expRes));
      arrEdit.push(browser.getText(locator2.attach));
      arrEdit.push(browser.getText(locator2.comments));

      assert.equal(arrDefault.join(', '), arrEdit.join(', '), 'Page has NOT same titles as in Default State');
    });

    it('is a single line input field', function () {
      let elTag = browser.getTagName(locator.input);
      assert.equal(elTag, data.tagInput, 'Summary is not a single line input field');
    });

    it(`font family is ${data.fontFamily}`, function () {
        let fontFamily = browser.getCssProperty(locator.input, 'font-family').value;
        assert.equal(fontFamily, data.fontFamily, 'Summary font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
    let fontSize = browser.getCssProperty(locator.input, 'font-size').value;
    assert.equal(fontSize, data.fontSize, 'Summary font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
    let fontWeight = browser.getCssProperty(locator.input, 'font-weight').value;
    assert.equal(fontWeight, data.fontWeight, 'Summary font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
    let fontColor = browser.getCssProperty(locator.input, 'color').value;
    assert.equal(fontColor, data.fontColor, 'Summary color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
    let align = browser.getCssProperty(locator.input, 'text-align').value;
    assert.equal(align, data.textAlign, 'Summary text is not aligned to the left')
    });
  });

  describe('Steps to reproduce', function () {

    it('accept multiline input', function () {
      let elType = browser.getTagName(locator.txtArea);
      assert.equal(elType, data.tagTextArea, 'Steps to reproduce is not accept multiline input');
    });

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.txtArea, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.txtArea, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.txtArea, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.txtArea, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.txtArea, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`);
    });
  });

  describe('Actual Result', function () {

    it('is a single line input field', function () {
    let elType = browser.getTagName(locator.inputActRes);
    assert.equal(elType, data.tagInput, 'is not a single line input field');
    });

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.inputActRes, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });

    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.inputActRes, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.inputActRes, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });

    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.inputActRes, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });

    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.inputActRes, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`)
    });
  });
});
