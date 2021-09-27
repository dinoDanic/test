import ConfigActionType from "./config.actionType";

export const setCar = (car) => ({
  type: ConfigActionType.SET_CAR,
  payload: car,
});

export const addService = (service) => ({
  type: ConfigActionType.ADD_SERVICE,
  payload: service,
});

export const removeService = (name) => ({
  type: ConfigActionType.REMOVE_SERVICE,
  payload: name,
});

export const setDiscount = (value) => ({
  type: ConfigActionType.SET_DISCOUNT,
  payload: value,
});

export const setSteps = (step) => ({
  type: ConfigActionType.SET_STEP,
  payload: step,
});
