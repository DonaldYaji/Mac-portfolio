import React from "react";

const Button = ({ styles = "", label = "Get Started", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:opacity-90 transition-all duration-300 ${styles}`}
  >
    {label}
  </button>
);

export default Button;
