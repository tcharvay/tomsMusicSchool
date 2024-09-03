import { useState } from "react";
import Selector from "../NoteScaleSelector/Selector";
import chordsArray from "../../data/chordsArray";
import "./ComposerApp.css";
import Swal from "sweetalert2";
function Composer() {
  const [note, setNote] = useState("");
  const [scale, setScale] = useState("");
  const [chordProgression, setChordProgression] = useState([]);

  let userSelection = `${note} ${scale}`;
  let indexArray = "0";
  /*Value 0 is given to show Not Found*/
  if (chordsArray.findIndex((item) => item.id === userSelection) < 0) {
    indexArray;
  } else
    indexArray = chordsArray.findIndex((item) => item.id === userSelection);
  console.log(indexArray);
  /* esto se repite en ChordsApp, podria hacerlo un componente*/

  const handleClick = () => {
    let newChord = chordsArray[indexArray].imgPiano;
    const tempProgression = [...chordProgression, newChord];
    setChordProgression(tempProgression);
    console.log(tempProgression);
  };

  const removeImage = (index) => {
    Swal.fire({
      title: "Delete chord?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
        });
      }
    });
  };

  console.log(chordProgression);

  return (
    <div className="composer-app">
      {/*<p>Chord Creator</p>*/}
      <div className="chord-selector">
        <Selector setNote={setNote} setScale={setScale} />
        <button className="btn-add" onClick={handleClick}>
          Add
        </button>
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
