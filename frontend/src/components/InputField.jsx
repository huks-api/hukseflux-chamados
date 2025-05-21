import React from "react";

const InputField = ({ label, type, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2"
    />
  </div>
);

export default InputField;
