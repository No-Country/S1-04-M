import React, { useState } from "react";
import EyeClose from "./icons/EyeClose";
import EyeOpen from "./icons/eye-open-icon.png";
import "./PassVisible.css";

export default function PassVisible({
  handleChange,
  value,
  disabled = false,
  inputName = "password",
  placeholder = "Contraseña",
}) {
  const [passVisible, setPassVisible] = useState(false);

  const handleClickSeePassword = () => {
    setPassVisible(!passVisible);
  };

  return (
    <div className="container-pass-visible">
      <input
        type={passVisible ? "text" : "password"}
        name={inputName}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      {!passVisible ? (
        <EyeClose
          className="button-pass-visible"
          onClick={handleClickSeePassword}
        />
      ) : (
        <img
          src={EyeOpen}
          alt="open"
          className="button-pass-visible"
          onClick={handleClickSeePassword}
        />
      )}
    </div>
  );
}
