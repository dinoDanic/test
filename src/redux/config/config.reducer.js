import ConfigActionType from "./config.actionType";

const INITIAL_STATE = {
  selectedCar: null,
  selectedServices: [],
  discount: null,
  activeStep: 1,
  errorMessage: null,
};

const configReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConfigActionType.SET_CAR:
      return {
        ...state,
        selectedCar: action.payload,
      };
    case ConfigActionType.ADD_SERVICE:
      return {
        ...state,
        selectedServices: [...state.selectedServices, action.payload],
      };
    case ConfigActionType.REMOVE_SERVICE:
      const removedService = state.selectedServices.filter(
        (service) => service.name !== action.payload
      );
      return {
        ...state,
        selectedServices: removedService,
      };
    case ConfigActionType.SET_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };
    case ConfigActionType.SET_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case ConfigActionType.SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default configReducer;
