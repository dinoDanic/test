import React from "react";
import { useDispatch } from "react-redux";

import {
  addService,
  removeService,
} from "../../../../../redux/config/config.actions";

import CheckBox from "../../../../../theme/ui-components/check-box/check-box.component";

const SelectService = ({ service }) => {
  const { name, price } = service;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(addService(service));
    } else {
      dispatch(removeService(service.name));
    }
  };
  return (
    <CheckBox value={name} price={price} onChange={(e) => handleChange(e)} />
  );
};

export default SelectService;
