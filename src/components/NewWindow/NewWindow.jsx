import React from "react";
import { useLocation } from "react-router-dom";
import "./NewWindow.css";

function NewWindow() {
  const location = useLocation();

  function openNewWindow() {
    const url = `${window.location.origin}${location.pathname}`;
    console.log(location.pathname);
    const width = 825;
    const height = 525;
    const specs = `width=${width},height=${height},resizable=yes,scrollbars=yes`;

    // Abre la nueva ventana
    window.open(url, "_blank", specs);
  }
  return (
    <div className="new-win-container">
      <button className="new-window" onClick={openNewWindow}>
        New window
      </button>
    </div>
  );
}

export default NewWindow;
