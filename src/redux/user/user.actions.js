import UserActionType from "./user.userActionType";

export const setUser = (userData) => ({
  type: UserActionType.SET_USER,
  payload: userData,
});
