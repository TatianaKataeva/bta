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
        attachmentLink: '#attachment',
        assigneeDropDownPlaceHolder: '#assignee .Dropdown-placeholder',
        priorityDropDownPlaceHolder: '#priority .Dropdown-placeholder',
        severityDropDownPlaceHolder: '#severity .Dropdown-placeholder',
        reproDropDownPlaceHolder: '#repro .Dropdown-placeholder',
        versionDropDownPlaceHolder: '#version .Dropdown-placeholder'
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
    inputExpRes: '#expected',
    inputAtach: '#attachment',
    btnAllIssues: '#all_issues',
    btnEdit: '#edit',
    bugTitle: '#bug',
    txtArea: '#str',
    reporter: '.text-gray'
  },

  bugReportTitles: {
    summary: '#summary_title',
    stepsToRep: '#str_title',
    actRes: '#actual_title',
    expRes: '#expected=title',
    attach: '#attach_title',
    assignee: '#assignee_title',
    reporter: '#reporter_title',
    version: '#version_title',
    priority: '#priority_title',
    severity: '#severity_value',
    repro: '#repro_title',
    comments: '#comments_title',
    allIssuesBtn: '#all_issues',
    btn: '#edit',
    bugTitle: '#summary',
    txtArea: '#str',
    registerButton: '#registration'
  }
};

