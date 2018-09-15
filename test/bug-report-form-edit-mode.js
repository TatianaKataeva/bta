const assert = require('chai').assert;
const data = require('../data/test.data').bugReportEditMode;
const locator = require('../data/locator');

describe('bug-report-form-edit-mode', function () {

  // describe('Page has the list of the same titles as in Default State', function () {
  //
  //   it('Field Summary', function () {
  //     let fontFamily = browser.getCssProperty(locator.bugReportEditMode.input, 'font-family');
  //     assert.equal(fontFamily, data.fontFamily, 'Summary font family is incorrect');
  //   });
  //
  // });

  describe('Summary', function () {

    it('is a single line input field', function () {
      browser.url('/');
      browser.waitForVisible(locator.loginPage.email,5000);
      browser.setValue(locator.loginPage.email,'tester@test.com');
      browser.setValue(locator.loginPage.password,'test');
      browser.click(locator.loginPage.loginButton);
      browser.waitForVisible(locator.bugReportEditMode.allIssuesBtn,2000);
      browser.click(locator.bugReportEditMode.allIssuesBtn);
      browser.waitForVisible(locator.bugReportEditMode.bugTitle,2000);
      browser.click(locator.bugReportEditMode.bugTitle);
      browser.waitForVisible(locator.bugReportEditMode.btn,2000);
      browser.click(locator.bugReportEditMode.btn);
      let elTag = browser.getTagName(locator.bugReportEditMode.input);
      assert.equal(elTag, data.tagInput, 'Summary is not a single line input field');
    });

    it(`font family is ${data.fontFamily}`, function () {
        let fontFamily = browser.getCssProperty(locator.bugReportEditMode.input, 'font-family').value;
        assert.equal(fontFamily, data.fontFamily, 'Summary font family is incorrect');
    });

    it(`font size is ${data.FontSize}`, function () {
    let fontSize = browser.getCssProperty(locator.bugReportEditMode.input, 'font-size').value;
    assert.equal(fontSize, data.FontSize, 'Summary font size is incorrect');
    });

    it(`font weight is ${data.fontWeight}`, function () {
    let fontWeight = browser.getCssProperty(locator.bugReportEditMode.input, 'font-weight').value;
    assert.equal(fontWeight, data.fontWeight, 'Summary font weight is incorrect');
    });

    it(`font color is ${data.FontColor}`, function () {
    let fontColor = browser.getCssProperty(locator.bugReportEditMode.input, 'color').value;
    assert.equal(fontColor, data.FontColor, 'Summary color is incorrect');
    });

    it(`text is aligned to the ${data.TextAlign}`, function () {
    let align = browser.getCssProperty(locator.bugReportEditMode.input, 'text-align').value;
    assert.equal(align, data.TextAlign, 'Summary text is not aligned to the left')
    });
  });

  // describe('Steps to reproduce', function () {
  //
  // it('accept multiline input', function () {
  //   browser.url('/');
  //   let elType = browser.getCssProperty(locator.bugReportEditMode.txtArea);
  //   assert.equal(elType.getTagName(), data.tagTextArea, 'Summary is not a single line input field'); //И заканчивается тут
  // });
  //
  //   it('text area font family: Segoe UI', function () {
  //   let fontFamily = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-family').value;
  //   assert.equal(fontFamily, data.globalHeader.fontFamily, 'Steps to reproduce font family is incorrect');
  //   });
  //
  //   it(' font size: 16px', function () {
  //     let fontSize = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-size').value;
  //     assert.equal(fontSize, data.summaryFontSize, 'Summary font size is incorrect');
  //   });
  //
  //   it('font weight is 400', function () {
  //     let fontWeight = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'font-weight').value;
  //     assert.equal(fontWeight, data.globalHeader.fontWeight, 'Summary font weight is incorrect');
  //   });
  //
  //   it('font color is #495057', function () {
  //     let fontColor = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'color').value;
  //     assert.equal(fontColor, data.summaryFontColor, 'Summary color is incorrect');
  //   });
  //
  //   it('text is aligned to the left', function () {
  //     let align = browser.getCssProperty(locator.bugReportEditMode.txtArea, 'text-align').value;
  //     assert.equal(align, data.summaryTextAlign, 'Summary text is not aligned to the left')
  //   });
  // });

  // describe('Actual Result', function () {

    // it('is a single line input field', function () {
    //   browser.url('/');
    //   let elType = browser.getCssProperty(locator.input);
    //   assert.equal(elType.getTagName(), data.tagSummary, 'Summary is not a single line input field'); //И заканчивается тут
    // });

  //   it('font family is Segoe UI', function () {
  //     let fontFamily = browser.getCssProperty(locator.input, 'font-family').value;
  //     assert.equal(fontFamily, data.globalHeader.fontFamily, 'Steps to reproduce font family is incorrect');
  //   });
  //
  //   it('font size: 16px', function () {
  //     let fontSize = browser.getCssProperty(locator.input, 'font-size').value;
  //     assert.equal(fontSize, data.summaryFontSize, 'Summary font size is incorrect');
  //   });
  //
  //   it('font weight is 400', function () {
  //     let fontWeight = browser.getCssProperty(locator.input, 'font-weight').value;
  //     assert.equal(fontWeight, data.globalHeader.fontWeight, 'Summary font weight is incorrect');
  //   });
  //
  //   it('font color is #495057', function () {
  //     let fontColor = browser.getCssProperty(locator.input, 'color').value;
  //     assert.equal(fontColor, data.summaryFontColor, 'Summary color is incorrect');
  //   });
  //
  //   it('text is aligned to the left', function () {
  //     let align = browser.getCssProperty(locator.input, 'text-align').value;
  //     assert.equal(align, data.summaryTextAlign, 'Summary text is not aligned to the left')
  //   });
  // });

});
