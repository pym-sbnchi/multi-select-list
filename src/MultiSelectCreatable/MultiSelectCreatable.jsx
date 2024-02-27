import React, { useState } from "react";
import "./index.scss";

export default function MultiSelectCreatable() {
  const options = [
    { value: "", label: "Select one..." },
    { value: "sport", label: "Sport" },
    { value: "game", label: "Game" },
    { value: "science", label: "Science" },
    { value: "art", label: "Art" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "vacation", label: "Vacation" },
  ];

  return (
    <>
      <div className="selectBox">
        <h5 className="title">
          Creatable multi-select dropdown list <br /> without any library
        </h5>
        <select className="selectInput">
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
