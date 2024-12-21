const paths = {
  // default path
  default: '/',
  home: '/home',

  // auth path
  auth: '/auth',
  login: 'login',
  register: 'register',
  forgotPassword: 'forgot-password',
  otp: 'otp',
  resetPassword: 'reset-password',
  emailRegister: 'email-register',

  // protected path
  challengesSystem: '/challenges-system',
  challengesRecruiter: '/challenges-recruiter',
  solutions: '/solutions',
  mySolutions: '/my-solutions',
  profile: '/profile',
  // settingsProfilePage: '/settingsProfilePage',
  challenges: '/challenges',
  solutionDetails: '/solutionDetails',
  setting: '/setting',
  statistic: '/statistic',
  recruiterCompany: '/recruiter-company',
  submitSolution: '/submit-solution',
  challengeDetails: '/challenge-details',
  tasks: '/tasks',
  taskDetails: '/task-details',
  submitSolutionTask: '/submit-solution-task',
  notfound: '/notfound',
  parcing: '/pracing',
  //

  API: {
    root: 'api',
    AUTH: {
      root: '/auth',
      login: `/login`,
      register: '/register',
      logout: '/logout',
      forgot_password: '/forgotPassword/send',
      reset_password: '/forgotPassword/reset',
      send_otp: '/send-otp',
      verify_email: '/verify-otp',
      verify_forgot_password_otp: '/forgotPassword/verify',
      refreshToken: '/refresh',
      resendOtp: 'otp-resend',
      info: '/me',
    },
    CHALLENGER: {
      root: '/challenger',
      profile: '/profile',
    },
    CHALLENGE: {
      root: '/challenges',
    },
    SOLUTION: {
      getIncompleteChallenge: '/solutions',
      submitted: '/solutions/submitted',
      submitSolution: '/solutions/challenge/submit',
      getAll: '/solutions/challenge',
      getDetails: `/solutions/challenge/get`,
      getSolutionsOfChallenge: `/solutions/challenges`,
      interaction: '/interaction',
      comment: '/comment',
    },
    taskee: {
      getInformation: '/taskees',
    },
    task: {
      root: '/task',
      downloadFigma: '/download-figma',
      downloadSource: '/download-source',
    },
  },

  LOCAL_STORAGE: {
    emailRegister: 'emailRegister',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    account: 'accountInformation',
    emailForgotPassword: 'emailForgotPassword',
    i18nLanguage: 'i18nextLng',
    profile: 'profile',
  },

  LANGUAGE: {
    english: 'en',
    vietnamese: 'vi',
  },

  QUERY_KEY: {
    challenges: 'challenges',
    meInfo: 'info',
    solutionIncompleteChallenge: 'solutionIncompleteChallenge',
    solutionSubmitted: 'solutionSubmitted',
    challengeDetails: 'challengeDetails',
    solutionList: 'solutionList',
    mySolution: 'mySolution',
    solution: 'solution',
    solutionOfChallenge: 'solutionOfChallenge',
    tasks: 'tasks',
    informationTaskee: 'informationTaskee',
    getAllSolutionTaskOfMe: 'my-solution-task',
    solutionDetails: 'solution-details',
    commentsOfSolution: 'comment-of-solution',
  },

  MUTATION_KEY: {
    remove_comment: 'remove-comment',
  },
};

export default paths;
