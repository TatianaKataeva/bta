module.exports = {

    client: {
        header: '.custom-header',
        app: '.container .p-5',
        footer: '.custom-footer',
        favicon: '#favicon'
    },

    globalHeader: {
        header: '.custom-header',
        headerText: '.custom-header span',
        headerImage: '.custom-header span img'
    },

    loginPage: {
        email: '#email',
        password: '#pass',
        loginButton: '#login',
        errorMessage: '.alert-danger',
        requiredText: '.text-sm-left',
        registrationButton: '#registration'
    },

    registrationPage: {
        firstName: '#fname',
        lastName: '#lname',
        errorMessage: '.alert-danger',
        registerButton: '#registration',
        email: '#email',
        password: '#pass'
    },

    newBugReportPage: {
        summaryTxtFld: '.input-group.mb-2>input',
        assigneeTxtFld: '.Dropdown-placeholder',
        bugReportForm: '#bug-form',
        summaryField: '#summary',
        stepsToReproduce: '#str',
        actualResult: '#actual',
        expectedResult: '#expected',
        attachmentLink: '#attachment'
    },

    navigationBar: {
        newBugButton: '#new_bug',
        allIssuesButton: '#all_issues',
        logoutButton: '#logout',
        navigetionBar: '[class="card-footer text-center mb-3"] .input-group-append',
        cardFooter: '.card-footer',
        submitButton: '#todo_add'
    },

    globalFooter: {
        footer: '.custom-footer',
        footerText: 'body .custom-footer'
    },

    bugReportFormDisabledState: {
        chooseBug: 'span.text-left=Wrong text in Global Footer',
        bugReportDisbForm: '.badge',
        attachment: 'a',
        textArea: '.text-area',
        titleFont: '.text-bold=Summary:',
        valueFont: 'span.text-gray=Medium',
        email: '#email',
        password: '#pass',
        loginButton: '#login',
        allIssues: '#all_issues',
        bugSummary: 'tbody span'
    },

  bugReportEditMode: {
    input: '#summary',
    inputActRes: '#actual',
    btnAllIssues: '#all_issues',
    btnEdit: '.btn-primary.btn-block',
    bugTitle: 'span.text-left=Register button has wrong text',
    txtArea: '#str'
  },

  bugReportTitles: {
    summary: 'div p:nth-child(3)',
    stepsToRep: 'div p:nth-child(6)',
    actRes: 'div p:nth-child(9)',
    expRes: 'div p:nth-child(12)',
    attach: 'div p:nth-child(15)',
    assignee: 'div p:nth-child(6)',
    reporter: 'div p:nth-child(6)',
    version: 'div p:nth-child(6)',
    priority: 'div p:nth-child(6)',
    severity: 'div p:nth-child(6)',
    repro: 'div p:nth-child(6)',
    comments: 'p:nth-last-child(4)',
    // array: `['$$('p.text-bold')[0]', '$$('p.text-bold')[1]', '$$('p.text-bold')[2]' ]`
    allIssuesBtn: '#all_issues',
    btn: '.btn-primary.btn-block',
    bugTitle: 'span.text-left=Register button has wrong text',
    txtArea: '#str',
    registerButton: '#registration'
  }
};

