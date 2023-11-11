export const AUTH_ENDPOINT = {
  REGISTER: () =>
    'https://kuda-creditclan-api.herokuapp.com/api/companies/onboardCompanies',
  FORGET_PASSWORD: () => '',
  LOGIN: () => 'https://kuda-creditclan-api.herokuapp.com/agents/login',
  LOGOUT: () => '',
  RESET_LOGIN: () => '',
  RECOVERY_MAIL: () => '',
  CHECK: () => '',
  VERIFY_RESET: () => '',
  RESET_PASSWORD: () => '',
}

export const STAFF = {
  GET_ALL_STAFF: () =>
    'https://kuda-creditclan-api.herokuapp.com/api/companies/getCompanyStaff',
  ADD_STAFF: () =>
    'https://kuda-creditclan-api.herokuapp.com/api/companies/addCompanyStaff',
}

// export const ADD_NEW_PROPERTY = {
//   ADD: () =>
//     'https://kuda-creditclan-api.herokuapp.com/agents/addPropertyByAgent',
// }
