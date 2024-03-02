import React, { useState } from "react";
import "./InfoBox.scss";

const CategoryBox = ({ bgColor, customers, count, icon, handleButtonClick }) => {

const [open, setOpen] = useState(false);
const uniqueCategories = [
  ...Array.from(
    new Set(
      customers
        ?.map((customer) => customer.category)
        .filter((category) => category !== undefined)
    )
  )
];

const toggleCategories = () => {
  setOpen(!open);
};

  return (
   
    <div className={`info-box ${bgColor}`} onClick={toggleCategories} style={{zIndex:999}}>
      <span className="info-icon --color-white">{icon}</span>
      <span className="info-text">
        <p><b>Categories</b></p>
        <h4>{count}</h4>
      </span>
      {open && (
      <div className="categoryModal">
      <ul>
      {uniqueCategories?.map((category)=>(
        <React.Fragment key={category}>
          <li id={category} onClick={() => handleButtonClick(`${category}`)}>
            {category}
          </li>
        </React.Fragment>
      ))}
      
      </ul>
    </div>)}
    </div>
    
    
  );
};
export default CategoryBox;
