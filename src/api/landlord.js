export const AUTH_ENDPOINT = {
  REGISTER: () => "https://lendnode.creditclan.com/kuda/agents/onboardAgents",
  FORGET_PASSWORD: () =>
    "https://lendnode.creditclan.com/kuda/agents/forgot_password",
  LOGIN: () => "https://lendnode.creditclan.com/kuda/agents/login",
  LOGOUT: () => "",
  RESET_LOGIN: () => "",
  RECOVERY_MAIL: () => "",
  CHECK: () => "",
  VERIFY_RESET: () => "",
  RESET_PASSWORD: () =>
    "https://lendnode.creditclan.com/kuda/agents/reset_password",
};

export const UPLOAD_IMAGE = {
  UPLOAD: () =>
    "https://mobile.creditclan.com/webapi/v1/upload/imagefilemerchant",
};

export const ADD_NEW_PROPERTY = {
  ADD: () => "https://lendnode.creditclan.com/kuda/agents/addPropertyByAgent",
};
