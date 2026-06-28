import { useState } from "react";

const useInputValidation = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const validationInput = () => {
    return /\d/.test(value);
  };

  return { value, onChange, validationInput };
};

export default useInputValidation;
