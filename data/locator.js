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
    registrationButton: '#registration'
  },

  registrationPage : {
    firstName: '#fname',
    lastName: '#lname',
    errorMessage: '.alert-danger',
    registerButton: '#registration'
  },

    globalFooter: {
        footer: '.custom-footer',
        footerText: 'body .custom-footer'
    },

    navigationBar : {
        newBugButton: '#new_bug',
        allIssuesButton: '#all_issues',
        logoutButton: '#logout',
        navigetionBar: '[class="card-footer text-center mb-3"] .input-group-append',
        cardFooter: '.card-footer',
        submitButton: '#todo_add'
    },

    bugList: {
        bodyBugList: '.container .table',
        headerTable: 'thead',
        bodyTable: 'tbody tr',
        bugSummaryTitle: 'thead th:nth-child(1)',
        bugPriorityTitle: 'thead th:nth-child(2)',
        bugStatusTitle: 'thead th:nth-child(3)',
        bugReporterTitle: 'thead th:nth-child(4)',




    }
};