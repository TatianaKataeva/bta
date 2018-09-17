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
    input: '#summary',
    inputActRes: '#actual',
    allIssuesBtn: '#all_issues',
    btn: '.btn-primary.btn-block',
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
  }
};
