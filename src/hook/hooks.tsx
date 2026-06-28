import { useState } from "react";

const useInputValidation = (initalValue) => {
  const [value, setValue] = useState(initalValue);

  const onChange = (e) => {
    setValue(value);
  };
  const validationIput = () => {
    return value.search(/\/d/) >= 0;
  };

  return { value, onChange, validationIput };
};

export default useInputValidation;
