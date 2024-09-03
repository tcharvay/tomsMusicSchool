import proptypes from "prop-types";
function Selector({ setNote, setScale }) {
  const handleChangeNote = (event) => {
    setNote(event.target.value);
  };

  const handleChangeScale = (event) => {
    setScale(event.target.value);
  };

  return (
    <div>
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
        </select>
      </div>
    </div>
  );
}

export default Selector;

Selector.propTypes = {
  setNote: proptypes.func,
  setScale: proptypes.func,
};
