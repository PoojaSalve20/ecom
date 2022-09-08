import React from "react";

const TriButton = (props) => {
  return (
    <>
      <button
        type={props.type}
        className="btn btn-black mx-2"
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
};

export default TriButton;
