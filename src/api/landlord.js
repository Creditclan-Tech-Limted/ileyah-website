export const AUTH_ENDPOINT = {
  REGISTER: () =>
    'https://kuda-creditclan-api.herokuapp.com/agents/onboardAgents',
  FORGET_PASSWORD: () => 'https://kuda-creditclan-api.herokuapp.com/agents/forgot_password',
  LOGIN: () => 'https://kuda-creditclan-api.herokuapp.com/agents/login',
  LOGOUT: () => '',
  RESET_LOGIN: () => '',
  RECOVERY_MAIL: () => '',
  CHECK: () => '',
  VERIFY_RESET: () => '',
  RESET_PASSWORD: () => 'https://kuda-creditclan-api.herokuapp.com/agents/reset_password',
}

export const UPLOAD_IMAGE = {
  UPLOAD: () =>
    'https://mobile.creditclan.com/webapi/v1/upload/imagefilemerchant',
}

export const ADD_NEW_PROPERTY = {
  ADD: () =>
    'https://kuda-creditclan-api.herokuapp.com/agents/addPropertyByAgent',
}
