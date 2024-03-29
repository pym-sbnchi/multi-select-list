import React, { useState } from "react";
import "./index.scss";

export default function MultiSelectCreatableWithoutLibrary() {
  const options = [
    { value: "sport", label: "Sport" },
    { value: "game", label: "Game" },
    { value: "science", label: "Science" },
    { value: "art", label: "Art" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "vacation", label: "Vacation" },
  ];

  const [showList, setShowList] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [x, setX] = useState("");

  const handleCross = () => {
    setSelectedOption([]);
  };

  const handleBtnCross = (option) => {
    setSelectedOption(selectedOption.filter((i) => i !== option));
  };

  window.addEventListener("click", (e) => {
    if (!e.target.closest(".inp")) {
      setShowList(false);
    }
  });

  return (
    <>
      <div className="selectBox">
        <h5 className="title">
          Creatable multi-select dropdown list <br /> without any library
        </h5>
        <div className="placeBox">
          <div className="inpBox" >
            {selectedOption &&
              selectedOption.map((option, index) => (
                <button key={index}>
                  {option}
                  <span
                    className="cross"
                    onClick={() => handleBtnCross(option)}
                  >
                    &times;
                  </span>
                </button>
              ))}
            <input
              className="inp"
              type="text"
              value={x}
              onClick={() => setShowList((list) => !list)}
              onChange={(e) => setX(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSelectedOption((x) => [...x, e.target.value]);
                  setX("");
                  setShowList(false);
                }
              }}
            />
          </div>
          <button className="cross" onClick={handleCross}>
            &times;
          </button>
        </div>
        {showList && (
          <ul className="list">
            {options.map((option, index) => (
              <li
                key={index}
                value={option.value}
                onClick={() => {
                  setSelectedOption((x) => [...x, option.label]);
                  setShowList(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
