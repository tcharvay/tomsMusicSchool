import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChordsApp.css";
import chordsArray from "../../data/chordsArray";
import RenderInWindow from "../NewTab/NewTab";
{
  /*import chordsData from "../../data/chordsData.JSON";  */
}

function ChordsApp() {
  const [note, setNote] = useState("C");
  const [scale, setScale] = useState("Major");

  const handleChangeNote = (event) => {
    setNote(event.target.value);
  };

  const handleChangeScale = (event) => {
    setScale(event.target.value);
  };

  let userSelection = `${note} ${scale}`;
  let searchArray = "0";

  if (chordsArray.findIndex((item) => item.id === userSelection) < 0) {
    searchArray;
  } else
    searchArray = chordsArray.findIndex((item) => item.id === userSelection);

  console.log(note);
  console.log(userSelection);
  console.log(searchArray);

  return (
    <div className="chords-app">
      <div className="chords-result">
        <div className="select-options">
          <p> Note: </p>
          <select className="note-select" onChange={handleChangeNote}>
            <option value="C">C</option>
            <option value="C#">C#</option>
            <option value="D">D</option>
            <option value="D#">D#</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="F#">F#</option>
            <option value="G">G</option>
            <option value="G#">G#</option>
            <option value="A">A</option>
            <option value="A#">A#</option>
            <option value="B">B</option>
          </select>
          <p> Scale:</p>
          <select className="scale-select" onChange={handleChangeScale}>
            <option value="Major">Major</option>
            <option value="Minor">Minor</option>
            <option value="Pentatonic Major">Pentatonic Major</option>
            <option value="Pentatonic Minor">Pentatonic Minor</option>
          </select>
          <p>Instrument: </p>
          <select className="inst-select">
            <option value="Guitar">Guitar</option>
            <option value="Piano">Piano</option>
            <option value="Ukelele">Ukelele</option>
          </select>

          <Link
            to="/chords/chordsContainer.jsx"
            target="_blank"
            className="new-tab"
          >
            Open in new tab
          </Link>
        </div>
        <div>
          <p className="root"> {chordsArray[searchArray].id} </p>
          <div className="img-chords-container">
            <img
              src={chordsArray[searchArray].imgGuitar}
              className="img-chords"
            />
          </div>
          <p className="scale">Scale notes: {chordsArray[searchArray].scale}</p>
          <p className="chords">
            Chords scale:{chordsArray[searchArray].chords}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChordsApp;
