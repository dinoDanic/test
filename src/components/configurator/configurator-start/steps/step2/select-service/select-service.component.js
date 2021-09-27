import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addService,
  removeService,
} from "../../../../../../redux/config/config.actions";

import CheckBox from "../../../../../../theme/ui-components/check-box/check-box.component";

const SelectService = ({ service }) => {
  const config = useSelector((state) => state.config);
  const [checked, setChecked] = useState(false);
  const { name, price } = service;
  const dispatch = useDispatch();

  useEffect(() => {
    const findCheck = config.selectedServices.filter(
      (service) => service.name === name
    );
    const result = findCheck[0];
    if (result) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [config, name]);

  const handleChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(addService(service));
    } else {
      dispatch(removeService(service.name));
    }
  };
  return (
    <CheckBox
      value={name}
      checked={checked}
      price={price}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SelectService;
