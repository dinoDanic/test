import UserActionType from "./user.userActionType";

const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
    case UserActionType.SET_USER:
      return action.payload;
  }
};

export default userReducer;
