module.exports = {

  client: {
    pageTitle: "Bug Tracker",
    faviconLink: 'https://reactbugtracker.com/favicon.ico'
  },

  globalHeader: {
    headerTitle: "BugTracker",
    headerColor: "rgba(0,0,0,0.125)",
    headerFontSize: "30px",
    fontWeight: "400",
    fontFamily: "segoe ui",
    fontColor: "#212529",
    imageSize: "30x30",
    textAlign: "center"
  },

  loginPage: {
    emailPlaceholderText: "Email *",
    emailFieldFontSize: "16px",
    emailFieldFontWeight: "400",
    emailFieldFontFamily: "segoe ui",
    emailFieldFontColor: "#495057",
    emailFieldFocusColor: "#80bdff"
  },

  user: {
    email: 'tester@test.com',
    password: 'test'
  },

  loginPageFunctionality: {
    minLength: 1,
    midLength: 22,
    maxLength: 45,
    noLoginOrPassError: 'Specify email and password',
    wrongLoginError: 'User with this email does not exist'
  },

  bugReportEditMode: {
    tagInput: 'input',
    fontSize: '16px',
    fontColor: 'rgba(73,80,87,1)',
    textAlign: 'start',
    fontFamily: 'segoe ui',
    fontWeight: '400',
    tagTextArea: 'textarea',
    summaryArray: [
      'Summary:',
      'Steps to Reproduce:'
    ]
  },

  registrationPageFunctionality: {
    firstNameMinLength: 1,
    firstNameMaxLength: 20,
    lastNameMinLength: 1,
    lastNameMaxLength: 20,
    emptyFieldError: 'Please fill all the fields',
    emailFieldMinLength: 1,
    emailFieldMiddleLength: 25,
    emailFieldMaxLength: 45,
    emailAlreadyRegisteredError: 'User with this email already exists',
    passwordFieldMinLength: 1,
    passwordFieldMaxLength: 45,
    passwordFieldMiddleLength: 20
  },

  navigationBarFunctionality: {
    length: "flex",
    navBarColor: "rgba(0,0,0,0.03)",
    navBarFont: "segoe ui",
    navBarFontSize: "16px",
    navBarFontWeight: "400",
    navBarButtonsFontColor: "rgba(255,255,255,1)",
    BackgroundColor1: "rgba(23,162,184,1)",
    BackgroundColor2: "rgba(108,117,125,1)"
  },

  globalFooter: {
    footerTitle: new Date().getFullYear().toString() + " Bug Tracker by React Web Development",
    footerColor: "rgba(0,0,0,0.125)",
    footerFontSize: "16px",
    fontWeight: "400",
    fontFamily: "segoe ui",
    fontColor: "#212529"
  },

  comments: {
    fontFamily: "segoe ui",
    fontSize: "16px",
    fontWeight: "400",
    fontColor: "rgba(73,80,87,1)",
    textAlign: "start",
    width: "100%",
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "rgb(206,212,218)",
    placeholder: "Add comment",
    addButton: {
         buttonAlign: 'right',
         backgroundColor: 'rgba(0,123,255,1)',
         fontFamily: 'segoe ui',
         fontSize: '16px',
         fontWeight: '400',
         fontColor: 'rgba(255,255,255,1)',
         textAlign: 'center',
         hover: '#0069d9'
      }
  }
};


