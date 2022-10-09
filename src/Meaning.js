import React from "react";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ul>
        {props.meaning.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <br />
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <br />
            <Example example={definition.example} />
          </div>
        );
      })}
    </div>
  );
}
