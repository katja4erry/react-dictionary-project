import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <p className="Example">
        {" "}
        <span className="wordExample">Example:</span> {props.example}
      </p>
    );
  } else {
    return null;
  }
}
