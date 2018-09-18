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

  registrationPage : {
    firstName: '#fname',
    lastName: '#lname',
    errorMessage: '.alert-danger',
    registerButton: '#registration'
  },

  newBugReportPage :{
  summaryTxtFld: '.input-group.mb-2>input',
  assigneeTxtFld: '.Dropdown-placeholder
},

  navigationBar : {
    newBugButton: '#new_bug',
    allIssuesButton: '#all_issues',
    logoutButton: '#logout',
    navigetionBar: '[class="card-footer text-center mb-3"] .input-group-append',
    cardFooter: '.card-footer',
    submitButton: '#todo_add'
  },
  
    globalFooter: {
        footer: '.custom-footer',
        footerText: 'body .custom-footer',
    },
  
   bugReportEditMode: {
    input: '#summary',
    inputActRes: '#actual',
    allIssuesBtn: '#all_issues',
    btn: '.btn-primary.btn-block',
    bugTitle: 'span.text-left=Register button has wrong text',
    txtArea: '#str'
  }
};