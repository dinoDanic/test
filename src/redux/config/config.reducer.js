import ConfigActionType from "./config.actionType";

const INITIAL_STATE = {
  selectedCar: null,
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionType.SET_CAR:
      return {
        ...state,
        selectedCar: action.payload,
      };
    default:
      return state;
  }
};

export default configReducer;
