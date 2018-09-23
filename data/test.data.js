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
        wrongLoginError: 'User with this email does not exist',
        wrongPasswordError: 'Password is incorrect',
        oneChar: 'A',
        errorDesignBackgroundColor: 'rgba(248,215,218,1)',
        errorDesignBorderColor: 'rgb(245,198,203)',
        errorDesignFontFamily: 'segoe ui',
        errorDesignFontSize: '16px',
        errorDesignFontWeight: '400',
        errorDesignTextAlign: 'center',
        errorDesignFontColor: 'rgba(114,28,36,1)'
    },

    bugReportFormDisabledState: {
        attachment: 'a',
        fontWeightAttach: "400",
        fontFamilyAttach: "Segoe UI",
        fontSizeAttach: "16px",
        minRowReq: 2,
        backColorSteps: 'rgba(233,236,239,0.2)',
        borderColor: 'rgba(0,0,0,0.5)',
        fontWeight: "700",
        fontFamily: "segoe ui",
        fontSize: "16px",
        fontColor: "rgba(33,37,41,1)",
        fontWeightValue: "400",
        fontFamilyValue: "segoe ui",
        fontSizeValue: "16px",
        fontColorValue: "rgba(0,0,0,0.49)"
    },

  bugReportEditMode: {
    tagInput: 'input',
    fontSize: '16px',
    fontColor: 'rgba(73,80,87,1)',
    textAlign: 'start',
    fontFamily: 'segoe ui',
    fontWeight: '400',
    tagTextArea: 'textarea',
    tagSpan: 'span',
    summaryArray: [
      'Summary:',
      'Steps to Reproduce:',
      'Actual Result:',
      'Expected result:',
      'Attachment:',
      'Assignee:',
      'Reporter:',
      'Version:',
      'Priority:',
      'Severity:',
      'Repro:',
      'Comments:'
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
        passwordFieldMiddleLength: 20,
        errorBackgrColor: 'rgba(248,215,218,1)',
        errorBorderColor: 'rgba(245,198,203,1)',
        errorFontFamily: 'segoe ui',
        errorFontSize: '16px',
        errorFontWeight: '400',
        errorFontColor: 'rgba(114,28,36,1)'
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

    newBugReportPage: {
        fontFamily: 'segoe ui',
        fontSize: '16px',
        fontWeight: '400',
        fontColor: 'rgba(73,80,87,1)',
        textAlign: 'start',
        placeholder: ['Summary *','Steps to reproduce *','Actual result *','Expected result *','Attachment link',
                      'Assignee *','Priority *','Severity *','Repro *','Version']

    }

};


