import ConfigActionType from "./config.actionType";
import { serviceData } from "../../mock/service.data";

const INITIAL_STATE = {
  selectedCar: null,
  serviceOptions: serviceData,
  selectedServices: [],
  price: 0,
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
    default:
      return state;
  }
};

export default configReducer;
