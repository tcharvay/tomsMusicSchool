import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ChordsApp.css";
import chordsArray from "../../data/chordsArray";

function ChordsApp() {
  const [note, setNote] = useState("C");
  const [scale, setScale] = useState("Major");
  const [instrument, setInst] = useState("imgGuitar");

  useEffect(() => {
    let storageNote = localStorage.getItem("noteSelection");
    let storageScale = localStorage.getItem("scaleSelection");
    let storageInst = localStorage.getItem("instrumentSelection");

    if (storageNote) {
      setNote(storageNote);
    }

    if (storageScale) {
      setScale(storageScale);
    }

    if (storageInst) {
      setInst(storageInst);
    }
  }, []);

  const handleChangeNote = (event) => {
    setNote(event.target.value);
    localStorage.setItem("noteSelection", event.target.value);
  };

  const handleChangeScale = (event) => {
    setScale(event.target.value);
    localStorage.setItem("scaleSelection", event.target.value);
  };

  const handleChangeInstrument = (event) => {
    setInst(event.target.value);
    localStorage.setItem("instrumentSelection", event.target.value);
  };

  let userSelection = `${note} ${scale}`;
  let instrumentSelection = `${instrument}`;
  let instrumentSelectionScale = `${instrument}Scale`;
  console.log(instrumentSelectionScale);

  let indexArray = "0";

  /*Value 0 is given to show Not Found*/

  if (chordsArray.findIndex((item) => item.id === userSelection) < 0) {
    indexArray;
  } else
    indexArray = chordsArray.findIndex((item) => item.id === userSelection);

  console.log(note);
  console.log(userSelection);
  console.log(indexArray);
  console.log(instrumentSelection);

  return (
    <div className="chords-app">
      <div className="chords-result">
        <div className="select-options">
          <p> Note: </p>
          <select className="note-select" onChange={handleChangeNote}>
            <option value=""></option>
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
            <option value=""></option>
            <option value="Major">Major</option>
            <option value="Minor">Minor</option>
            <option value="Pentatonic Major">Pentatonic Major</option>
            <option value="Pentatonic Minor">Pentatonic Minor</option>
          </select>
          <p className="scale-select">Instrument: </p>
          <select className="inst-select" onChange={handleChangeInstrument}>
            <option value=""></option>
            <option value="imgGuitar">Guitar</option>
            <option value="imgPiano">Piano</option>
            <option value="imgUkelele">Ukelele</option>
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
          <p className="root"> {chordsArray[indexArray].id} </p>
          <div className="img-chords-container">
            <img
              src={chordsArray[indexArray][instrumentSelection]}
              className="img-chords"
            />
          </div>

          <p className="scale">Scale notes: {chordsArray[indexArray].scale}</p>
          <div className="img-chords-container">
            <img
              src={chordsArray[indexArray][instrumentSelectionScale]}
              className="img-chords"
            />
          </div>
          <p className="chords">
            Chords Armonic scale:{chordsArray[indexArray].chords}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChordsApp;
