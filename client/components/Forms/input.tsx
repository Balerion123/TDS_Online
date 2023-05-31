import classes from "./input.module.css";
import React, { useState } from "react";

interface inputProps {
  placeholder: string;
  type: string;
  name: string;
  sendData: Function;
}

function Input(props: inputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputData, setInputData] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputData === "") setIsFocused(false);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
    props.sendData(event.target.value);
  };

  return (
    <div className={classes.inputContainer}>
      <label className={isFocused ? classes.shift : ""}>
        {props.placeholder}
      </label>
      <input
        type={props.type}
        name={props.name}
        autoComplete="name"
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={inputData}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
