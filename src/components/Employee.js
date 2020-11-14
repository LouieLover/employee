import React from "react";

function Employee(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.picture}
        style={{ margin: "0 auto" }}
      />
      <h3>First: {props.first}</h3>
      <h3>Last: {props.last}</h3>
      <h3>Email: {props.email}</h3>
      <h3>DOB: {props.dob}</h3>
    </div>
  );
}

export default Employee;
