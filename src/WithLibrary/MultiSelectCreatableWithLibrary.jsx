import React from "react";
import './index.scss'
import CreatableSelect from "react-select/creatable";

export default function MultiSelectCreatableWithLibrary() {
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
        <h5 className="title">Creatable multi-select dropdown list <br/> with react select library</h5>
        <CreatableSelect className="selectInp" options={options} isMulti onChange={handleChange} />
      </div>
    </>
  );
}
