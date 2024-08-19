import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Chords from "./components/Chords/ChordsContainer";
import Footer from "./components/Footer/Footer";
import MetronomeContainer from "./components/Metronome/MetronomeContainer";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/Chords/ChordsContainer.jsx" element={<Chords/>}></Route>
          <Route path="/Metronome/MetronomeContainer.jsx" element={<MetronomeContainer />}></Route>
       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
