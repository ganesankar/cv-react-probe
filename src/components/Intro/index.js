import React  from "react";

const Intro = props => {
  return (
    <div className="d-flex align-content-center flex-wrap mb-3">
      <div className="p-2 ">
        {" "}
        <h1>{props.data.name}</h1>
        {props.data.desc}
      </div>
    </div>
  );
};

export default Intro;
