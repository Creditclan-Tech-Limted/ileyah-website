export const AUTH_ENDPOINT = {
  REGISTER: () =>
    'https://lendnode.creditclan.com/kuda/api/companies/onboardCompanies',
  FORGET_PASSWORD: () => '',
  LOGIN: () => 'https://lendnode.creditclan.com/kuda/agents/login',
  LOGOUT: () => '',
  RESET_LOGIN: () => '',
  RECOVERY_MAIL: () => '',
  CHECK: () => '',
  VERIFY_RESET: () => '',
  RESET_PASSWORD: () => '',
}

export const STAFF = {
  GET_ALL_STAFF: () =>
    'https://lendnode.creditclan.com/kuda/api/companies/getCompanyStaff',
  ADD_STAFF: () =>
    'https://lendnode.creditclan.com/kuda/api/companies/addCompanyStaff',
}

// export const ADD_NEW_PROPERTY = {
//   ADD: () =>
//     'https://lendnode.creditclan.com/kuda/agents/addPropertyByAgent',
// }
