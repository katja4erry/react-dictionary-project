import React from "react";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ul className="synonyms">
        {props.meaning.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <Example example={definition.example} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
