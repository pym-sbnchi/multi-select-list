import React from "react";
import "./index.css";

export default function MultiSelectCreatable() {
  const options = [
    { value: "sport", label: "Sport" },
    { value: "game", label: "Game" },
    { value: "science", label: "Science" },
    { value: "art", label: "Art" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
  ];
  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
  };
  return (
    <>
      <div className="selectBox">
        <select name="" id="" className="selectInp">
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
