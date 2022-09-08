import React from "react";

const TriButtonOutline = (props) => {
  return (
    <>
      <button className="btn btn-outline-black " 
        onClick={props.onClick}>
        {props.title}
      </button>
    </>
  );
};

export default TriButtonOutline;
