const assert = require('chai').assert;
const data = require('../data/test.data').bugReportEditMode;
const locator = require('../data/locator').bugReportEditMode;
const locator2 = require('../data/locator').bugReportTitles;
const locator3 = require('../data/locator').loginPage;


describe('bug-report-form-edit-mode', function () {

  describe('Bug report from Edit Mode', function () {

    const staticValueDefault = []; // Array of static text values in Default state

    it(`Page has the same titles as in Default State`, function () {

      browser.url('/');
      browser.waitForVisible(locator3.email,7000);
      browser.setValue(locator3.email,'tester@test.com');
      browser.setValue(locator3.password,'test');
      browser.click(locator3.loginButton);
      browser.waitForVisible(locator.btnAllIssues,7000);
      browser.click(locator.btnAllIssues);
      browser.waitForVisible(locator.bugTitle,20000);
      $$('#summary')[1].click();

      browser.waitForVisible(locator2.summary,20000);

     const arrDefault = []; // Array of titles in Default state
      for (let i in $$('.text-bold')) {
        arrDefault.push($$('.text-bold')[i].getText());
      }

      // ---------Start--------- Pushing static text values from Default state to Array
      for (let i in $$('#badge')) {
        staticValueDefault.push($$('#badge')[i].getText());
      }

      for (let i in $$('#attach_link')) {
        staticValueDefault.push($$('#attach_link')[i].getText());
      }

      for (let i in $$('textarea')) {
        staticValueDefault.push($$('textarea')[i].getText());
      }

      for (let i in $$('.text-gray')) {
        staticValueDefault.push($$('.text-gray')[i].getText());
      }
        // ---------End---------

      browser.click(locator.btnEdit);
      browser.waitForVisible(locator2.summary,20000);

      const arrEdit = []; // Array of titles in Edit Mode
      for (let i in $$('.text-bold')) {
        arrEdit.push($$('.text-bold')[i].getText());
      }

      assert.equal(arrDefault.join(', '), arrEdit.join(', '), 'Page has NOT same titles as in Default State');
    });


    it('Static text in default state = Input values in Edit Mode', function () {
      const inputValueEdit = [];
      for (let i in $$('input')) {
        inputValueEdit.push($$('input')[i].getValue());
      }

      for (let i in $$('textarea')) {
        let el = $$('textarea')[i].getText();
        inputValueEdit.push(el);
      }

      for (let i in $$('.Dropdown-placeholder')) {
        let el = $$('.Dropdown-placeholder')[i].getText();
        inputValueEdit.push(el);
      }

      let statValDefCompired = [];
      for (let i = 0; i < inputValueEdit.length; i++) {
        if (staticValueDefault.includes(inputValueEdit[i])) {
          statValDefCompired.push(inputValueEdit[i]);
        }
      }

      assert.equal(statValDefCompired.sort().filter(word => word != '').join(', '), inputValueEdit.sort().join(', '), 'Static text in default state != Input values in Edit Mode');
    });


    it('reporter remains static', function () {
      let reporter = browser.getTagName(locator.reporter);
      assert.equal(reporter, data.tagSpan, 'reporter not static');
    });
  });


  describe('Summary', function () {

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


  describe('Expected Result', function () {

    it('is a single line input field', function () {
      let elType = browser.getTagName(locator.inputExpRes);
      assert.equal(elType, data.tagInput, 'is not a single line input field');
    });


    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.inputExpRes, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });


    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.inputExpRes, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });


    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.inputExpRes, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });


    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.inputExpRes, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });


    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.inputExpRes, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`)
    });
  });

  describe('Attachment', function () {

    it('is a single line input field', function () {
      let elType = browser.getTagName(locator.inputAtach);
      assert.equal(elType, data.tagInput, 'is not a single line input field');
    });


    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = browser.getCssProperty(locator.inputAtach, 'font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });


    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.inputAtach, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });


    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.inputAtach, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });


    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.inputAtach, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });


    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.inputAtach, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`)
    });
  });


  describe('Drop-Down lists', function () {

    it(`font family is ${data.fontFamily}`, function () {
      let fontFamily = $$('.Dropdown-control')[0].getCssProperty('font-family').value;
      assert.equal(fontFamily, data.fontFamily, 'font family is incorrect');
    });


    it(`font size is ${data.fontSize}`, function () {
      let fontSize = browser.getCssProperty(locator.inputAtach, 'font-size').value;
      assert.equal(fontSize, data.fontSize, 'font size is incorrect');
    });


    it(`font weight is ${data.fontWeight}`, function () {
      let fontWeight = browser.getCssProperty(locator.inputAtach, 'font-weight').value;
      assert.equal(fontWeight, data.fontWeight, 'font weight is incorrect');
    });


    it(`font color is ${data.fontColor}`, function () {
      let fontColor = browser.getCssProperty(locator.inputAtach, 'color').value;
      assert.equal(fontColor, data.fontColor, 'color is incorrect');
    });


    it(`text is aligned to the ${data.textAlign}`, function () {
      let align = browser.getCssProperty(locator.inputAtach, 'text-align').value;
      assert.equal(align, data.textAlign, `text is not aligned to the ${data.textAlign}`)
    });
  });
});
// for (let i in data.summaryArray) {
//     it(`Title - ${data.summaryArray[i]}`, function () {
//         let title = $$('.text-bold')[i].getText();
//         console.log(title);
//         assert.isTrue(true);
//     });
// }
