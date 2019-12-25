import React  from "react";

const Intro = props => {
  console.log("props.data", props.data);
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
