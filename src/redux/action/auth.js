import AuthStorage from "src/utils/AuthStorage";

import { SINGLE_API } from "src/redux/actions/type";

export function loginRequest(payload, next, nextErr) {
  return {
    type: "LOGIN_REQUEST",
    payload,
    next,
    nextErr
  };
}

export function logoutRequest(next) {
  return {
    type: "LOGOUT_REQUEST",
    next
  };
}

export function loginFacebook(payload, next) {
  return {
    type: "LOGIN_FACEBOOK",
    payload,
    next
  };
}

export const getUserAuth = (payload, next) => {
  return {
    type: SINGLE_API,
    payload: {
      uri: "/users/" + AuthStorage.userId,
      successType: "GET_USER_AUTH_SUCCESS",
      afterSuccess: next
    }
  };
};

export const resetPassword = (payload, next, nextError) => {
  return {
    type: SINGLE_API,
    payload: {
      uri: "/users/reset-password?access_token=" + payload.token,
      params: { newPassword: payload.password },
      opt: { method: "POST" },
      afterSuccess: next,
      afterError: nextError
    }
  };
};

export const forgotPassword = (payload, next, nextError) => {
  return {
    type: SINGLE_API,
    payload: {
      uri: "/users/reset",
      params: { email: payload.email },
      opt: { method: "POST" },
      afterSuccess: next,
      afterError: nextError
    }
  };
};

export const changePassword = (payload, next, nextError) => {
  const { oldPassword, newPassword } = payload;
  return {
    type: SINGLE_API,
    payload: {
      uri: "/users/change-password",
      params: { oldPassword, newPassword },
      opt: { method: "POST" },
      afterSuccess: next,
      afterError: nextError
    }
  };
};

export const updateProfile = (payload, next, nextError) => {
  return {
    type: SINGLE_API,
    payload: {
      uri: "/users/" + AuthStorage.userId,
      params: payload,
      opt: { method: "PATCH" },
      successType: "UPDATE_PROFILE_SUCCESS",
      afterSuccess: next,
      afterError: nextError
    }
  };
};
