import React, { useState } from "react";
import "./Students1.css";
import Photo from "./profile.jpeg";

export const Students1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="profile" />
      <h2 className="title">M SOWMYA</h2>
     
      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>SAVEETHA ENGINEERING COLLEGE</p>
          <p className="details">Reg No: 212221230107</p>
          <p>Artificial Intelligence and Data science</p>
        </div>
      )}
    </div>
  );
};


export default Students1;