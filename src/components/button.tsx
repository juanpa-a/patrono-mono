import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  secondary?: boolean;
  disabled?: boolean;
};

const Button = ({ text, onClick, secondary, disabled = false }: ButtonProps) => (
  <button
    className={`${
      secondary
        ? "bg-grain text-stone-800 hover:bg-orange-300"
        : "bg-orange-500 text-white hover:bg-orange-700"
    } rounded px-4 py-2 font-bold`}
    onClick={onClick}
    disabled={disabled}
    style={disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
  >
    {text}
  </button>
);

export default Button;
