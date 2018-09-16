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
    errorMessage: '.alert-danger'
  },

  bugReportEditMode: {
    input: 'div .form-control:nth-child(4)',
    inputActRes: 'div .form-control:nth-child(4)',
    allIssuesBtn: '#all_issues',
    bugTitle: 'span.text-left=Register button has wrong text',
    btn: '.btn-primary.btn-block',
    txtArea: 'div :nth-child(8)'
  }
};
