const assert = require('chai').assert;
const data = require('../data/test.data').bugList;
const locator = require('../data/locator');

    describe('Page Structure', function () {

        it('Open Bug List Page from Navigation Bar on Bug Report Form', function () {
            browser.url('/');
            browser.waitForVisible(locator.loginPage.email,5000);
            browser.setValue(locator.loginPage.email,'tester@test.com');
            browser.setValue(locator.loginPage.password,'test');
            browser.click(locator.loginPage.loginButton);
            browser.waitForVisible(locator.navigationBar.allIssuesButton,5000);
            browser.click(locator.navigationBar.allIssuesButton);
            let bugListVisible = browser.isVisible(locator.bugList.bodyBugList);
            assert.isTrue(bugListVisible, 'Bug List NOT Visible');
        });

        it('Table has the Header', function () {
            browser.waitForVisible(locator.bugList.bodyTable,3000);
            let headerTableVisible = browser.isVisible(locator.bugList.headerTable);
            assert.isTrue(headerTableVisible, 'Header table NOT Visible');
        });

        it('Table has the List of Bug-reports', function () {
            let bodyTableVisible = browser.isVisible(locator.bugList.bodyTable);
            assert.isTrue(bodyTableVisible, 'List of bugs NOT Visible');
        });
    });

    describe('Table Header', function () {

        it('Bug Summary title', function () {
            let bugSummaryTitle = browser.getText(locator.bugList.bugSummaryTitle);
            assert.equal(bugSummaryTitle, data.bugSummaryTitle, 'Bug Summary title is incorrect')
        });

        it('Bug Priority title', function () {
            let bugPriorityTitle = browser.getText(locator.bugList.bugPriorityTitle);
            assert.equal(bugPriorityTitle, data.bugPriorityTitle, 'Bug Priority title is incorrect')
        });

        it('Bug Status title', function () {
            let bugStatusTitle = browser.getText(locator.bugList.bugStatusTitle);
            assert.equal(bugStatusTitle, data.bugStatusTitle, 'Bug Status title is incorrect')
        });

        it('Bug Reporter title', function () {
            let bugReporterTitle = browser.getText(locator.bugList.bugReporterTitle);
            assert.equal(bugReporterTitle, data.bugReporterTitle, 'Bug Reporter title is incorrect')
        });

        it(`All columns titles have Text align ${data.textAlignHeader}`, function () {
            let titleColumns = $(locator.bugList.titleTable);
            let titleColumnsTextAlign = titleColumns.getCssProperty('text-align').value;
            assert.equal(titleColumnsTextAlign, data.textAlignHeader, 'Titles Text-align is incorrect')
        });

        it(`All columns titles have Text-size ${data.fontSizeHeader}`, function () {
            let fontSize = browser.getCssProperty(locator.bugList.headerTable, 'font-size').value;
            assert.equal(fontSize, data.fontSizeHeader, 'Titles Font-size is incorrect')
        });

        it(`All columns titles have Text-weight ${data.fontWeightHeader}`, function () {
            let titleColumns = $(locator.bugList.titleTable);
            let titleColumnsFontWeight = titleColumns.getCssProperty('font-weight').value;
            assert.equal(titleColumnsFontWeight, data.fontWeightHeader, 'Titles Font-weight is incorrect')
        });

        it(`All columns titles have Text-family ${data.fontFamilyHeader}`, function () {
            let titleColumns = $(locator.bugList.fontfamilyTitle);
            let titleColumnsFontFamily = titleColumns.getCssProperty('font-family').value;
            assert.equal(titleColumnsFontFamily, data.fontFamilyHeader, 'Titles Font-family is incorrect')
        });

        it(`All columns titles have Text-color ${data.fontColorHeader}`, function () {
            let titleColumns = $(locator.bugList.bodyTable);
            let titleColumnsFontColor = titleColumns.getCssProperty('color').parsed.hex;
            assert.equal(titleColumnsFontColor, data.fontColorHeader, 'Titles Font-color is incorrect')
        });
    });

    describe('Summary', function () {

        it(`Data all rows of Summary has Text align ${data.textAlignSummary}`, function () {
            let summaryRows = $(locator.bugList.textSummary);
            let summaryRowsTextAlign = summaryRows.getCssProperty('text-align').value;
            assert.equal(summaryRowsTextAlign, data.textAlignSummary, 'Rows Summary Text-align is incorrect')
        });

        it(`Data all rows of Summary has Font-color ${data.fontColorSummary}`, function () {
            let summaryRows = $(locator.bugList.textSummary);
            let summaryRowsFontColor = summaryRows.getCssProperty('color').parsed.hex;
            assert.equal(summaryRowsFontColor, data.fontColorSummary, 'Rows Summary Font-color is incorrect')
        });

        it(`Data all rows of Summary has Font-weight ${data.fontWeightSummary}`, function () {
            let summaryRows = $(locator.bugList.textSummary);
            let summaryRowsFontWeight = summaryRows.getCssProperty('font-weight').value;
            assert.equal(summaryRowsFontWeight, data.fontWeightSummary, 'Rows Summary Font-weight is incorrect')
        });

        it(`Data all rows of Summary has Font-family ${data.fontFamilySummary}`, function () {
            let summaryRows = $(locator.bugList.textSummary);
            let summaryRowsFontFamily = summaryRows.getCssProperty('font-family').value;
            assert.equal(summaryRowsFontFamily, data.fontFamilySummary, 'Rows Summary Font-family is incorrect')
        });

        it(`Data all rows of Summary has Font-size ${data.fontSizeSummary}`, function () {
            let summaryRows = $(locator.bugList.textSummary);
            let summaryRowsFontSize = summaryRows.getCssProperty('font-size').value;
            assert.equal(summaryRowsFontSize, data.fontSizeSummary, 'Rows Summary Font-size is incorrect')
        });
    });

    describe('Priority', function () {

        it(`Data all rows of Priority has Text align ${data.textAlignPriority}`, function () {
            let summaryRows = $(locator.bugList.textPriority);
            let summaryRowsTextAlign = summaryRows.getCssProperty('text-align').value;
            assert.equal(summaryRowsTextAlign, data.textAlignPriority, 'Rows Priority Text-align is incorrect')
        });

        it(`Data all rows of Priority has Font-color ${data.fontColorPriority}`, function () {
            let summaryRows = $(locator.bugList.textPriority);
            let summaryRowsFontColor = summaryRows.getCssProperty('color').parsed.hex;
            assert.equal(summaryRowsFontColor, data.fontColorPriority, 'Rows Priority Font-color is incorrect')
        });

        it(`Data all rows of Priority has Font-weight ${data.fontWeightPriority}`, function () {
            let summaryRows = $(locator.bugList.textPriority);
            let summaryRowsFontWeight = summaryRows.getCssProperty('font-weight').value;
            assert.equal(summaryRowsFontWeight, data.fontWeightPriority, 'Rows Priority Font-weight is incorrect')
        });

        it(`Data all rows of Priority has Font-family ${data.fontFamilyPriority}`, function () {
            let summaryRows = $(locator.bugList.textPriority);
            let summaryRowsFontFamily = summaryRows.getCssProperty('font-family').value;
            assert.equal(summaryRowsFontFamily, data.fontFamilyPriority, 'Rows Priority Font-family is incorrect')
        });

        it(`Data all rows of Priority has Font-size ${data.fontSizePriority}`, function () {
            let summaryRows = $(locator.bugList.textPriority);
            let summaryRowsFontSize = summaryRows.getCssProperty('font-size').value;
            assert.equal(summaryRowsFontSize, data.fontSizePriority, 'Rows Priority Font-size is incorrect')
        });
    });

    describe('Status', function () {

        it(`Data all rows of Status has Text align ${data.textAlignStatus}`, function () {
            let summaryRows = $(locator.bugList.textStatus);
            let summaryRowsTextAlign = summaryRows.getCssProperty('text-align').value;
            assert.equal(summaryRowsTextAlign, data.textAlignStatus, 'Rows Status Text-align is incorrect')
        });

        it(`Data all rows of Status has Font-color ${data.fontColorStatus}`, function () {
            let summaryRows = $(locator.bugList.textStatus);
            let summaryRowsFontColor = summaryRows.getCssProperty('color').parsed.hex;
            assert.equal(summaryRowsFontColor, data.fontColorStatus, 'Rows Status Font-color is incorrect')
        });

        it(`Data all rows of Status has Font-weight ${data.fontWeightStatus}`, function () {
            let summaryRows = $(locator.bugList.textStatus);
            let summaryRowsFontWeight = summaryRows.getCssProperty('font-weight').value;
            assert.equal(summaryRowsFontWeight, data.fontWeightStatus, 'Rows Status Font-weight is incorrect')
        });

        it(`Data all rows of Status has Font-family ${data.fontFamilyStatus}`, function () {
            let summaryRows = $(locator.bugList.textStatus);
            let summaryRowsFontFamily = summaryRows.getCssProperty('font-family').value;
            assert.equal(summaryRowsFontFamily, data.fontFamilyStatus, 'Rows Status Font-family is incorrect')
        });

        it(`Data all rows of Status has Font-size ${data.fontSizeStatus}`, function () {
            let summaryRows = $(locator.bugList.textStatus);
            let summaryRowsFontSize = summaryRows.getCssProperty('font-size').value;
            assert.equal(summaryRowsFontSize, data.fontSizeStatus, 'Rows Status Font-size is incorrect')
        });
    });

    describe('Reporter', function () {

        it(`Data all rows of Reporter has Text align ${data.textAlignReporter}`, function () {
            let summaryRows = $(locator.bugList.textReporter);
            let summaryRowsTextAlign = summaryRows.getCssProperty('text-align').value;
            assert.equal(summaryRowsTextAlign, data.textAlignReporter, 'Rows Reporter Text-align is incorrect')
        });

        it(`Data all rows of Reporter has Font-color ${data.fontColorReporter}`, function () {
            let summaryRows = $(locator.bugList.textReporter);
            let summaryRowsFontColor = summaryRows.getCssProperty('color').parsed.hex;
            assert.equal(summaryRowsFontColor, data.fontColorReporter, 'Rows Reporter Font-color is incorrect')
        });

        it(`Data all rows of Reporter has Font-weight ${data.fontWeightReporter}`, function () {
            let summaryRows = $(locator.bugList.textReporter);
            let summaryRowsFontWeight = summaryRows.getCssProperty('font-weight').value;
            assert.equal(summaryRowsFontWeight, data.fontWeightReporter, 'Rows Reporter Font-weight is incorrect')
        });

        it(`Data all rows of Reporter has Font-family ${data.fontFamilyReporter}`, function () {
            let summaryRows = $(locator.bugList.textReporter);
            let summaryRowsFontFamily = summaryRows.getCssProperty('font-family').value;
            assert.equal(summaryRowsFontFamily, data.fontFamilyReporter, 'Rows Reporter Font-family is incorrect')
        });

        it(`Data all rows of Reporter has Font-size ${data.fontSizeReporter}`, function () {
            let summaryRows = $(locator.bugList.textReporter);
            let summaryRowsFontSize = summaryRows.getCssProperty('font-size').value;
            assert.equal(summaryRowsFontSize, data.fontSizeReporter, 'Rows Reporter Font-size is incorrect')
        });
    });