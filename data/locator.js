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
  }
};