import ConfigActionType from "./config.actionType";

export const setCar = (car) => ({
  type: ConfigActionType.SET_CAR,
  payload: car,
});
