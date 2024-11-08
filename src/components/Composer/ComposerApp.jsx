import { useState } from "react";
import Selector from "../NoteScaleSelector/Selector";
import chordsArray from "../../data/chordsArray";
import "./ComposerApp.css";
import Swal from "sweetalert2";
function Composer() {
  const [note, setNote] = useState("");
  const [scale, setScale] = useState("");
  const [chordProgression, setChordProgression] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  let userSelection = `${note} ${scale}`;
  let indexArray = "0";
  /*Value 0 is given to show Not Found*/
  if (chordsArray.findIndex((item) => item.id === userSelection) < 0) {
    indexArray;
  } else
    indexArray = chordsArray.findIndex((item) => item.id === userSelection);

  const handleClick = () => {
    let newChord = chordsArray[indexArray].imgPiano;
    const tempProgression = [...chordProgression, newChord];
    setChordProgression(tempProgression);
    console.log(tempProgression);
  };
  const removeImage = (index) => {
    Swal.fire({
      title: "Editing Chord",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      showDenyButton: true,
      denyButtonColor: "#0d8922",
      denyButtonText: "Edit",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const tempProgression = [...chordProgression];
        const chordToRemove = tempProgression.splice(index, 1);
        console.log(chordToRemove);
        setChordProgression(tempProgression);
        console.log(tempProgression);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          confirmButtonColor: "#3085d6",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Replace chord for:",
          html: `
            <label for="note">Note:</label>
            <select id="note" className="note-select">
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
            
            <label for="scale">Scale:</label>
            <select id="scale" className="scale-select">
              <option value="">Major</option>
              <option value="m">Minor</option>
            </select>
          `,
          focusConfirm: false,
          confirmButtonColor: "#3085d6",
          showCancelButton: true,
          cancelButtonColor: "#d33",
          preConfirm: () => {
            const note = document.getElementById("note").value;
            const scale = document.getElementById("scale").value;
            return { note, scale };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const { note, scale } = result.value;
            console.log(note, scale);
            const tempProgression = [...chordProgression];
            console.log(tempProgression);
            const chordToReplace = tempProgression.splice(
              index,
              1,
              `/PianoChords/${note}${scale}.png`
            );
            console.log(chordToReplace);
            setChordProgression(tempProgression);
            console.log(tempProgression);
          }
        });
      }
    });
  };

  const editToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  console.log(chordProgression);

  return (
    <div className="composer-app">
      <div className="menu">
        <div className="chord-selector">
          <Selector setNote={setNote} setScale={setScale} />
          <button className="btn-add" onClick={handleClick}>
            Add
          </button>
        </div>
        <div className="edit-save-btns">
          <button className="btn-edit" onClick={editToggleVisibility}>
            {isVisible ? "Hide" : "Edit"}
          </button>
          <button className="btn-save">Save</button>
        </div>
      </div>
      <div className="edit">
        {isVisible && (
          <ul>
            Click on chord for edit.
            <p>Chord Progression:</p>
            {chordProgression.map((item, index) => (
              <li type="1" key={index}>
                {item.replace("/PianoChords/", "").replace(".png", "")}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="display-chordProgression">
        <div className="display-chord">
          {chordProgression.map((src, index) => (
            <img key={index} src={src} onClick={() => removeImage(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Composer;
