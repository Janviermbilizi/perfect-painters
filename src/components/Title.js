import React from "react";

function Title(props) {
  return (
    <div
      className={`jumbotron jumbotron-fluid text-center m-0 p-2 ${props.bg}`}
    >
      <div className="container">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
export default Title;
