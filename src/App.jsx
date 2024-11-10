import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Chords from "./components/Chords/ChordsContainer";
import Footer from "./components/Footer/Footer";
import MetronomeContainer from "./components/Metronome/MetronomeContainer";
import NavBar from "./components/NavBar/NavBar";
import NewsContainer from "./components/News/NewsContainer";
import ComposerContainer from "./components/Composer/ComposerContainer";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<NewsContainer />} />
          <Route
            path="/News/NewsContainer.jsx"
            element={<NewsContainer />}
          ></Route>
          <Route
            path="/Chords/ChordsContainer.jsx"
            element={<Chords />}
          ></Route>
          <Route
            path="/Metronome/MetronomeContainer.jsx"
            element={<MetronomeContainer />}
          ></Route>
          <Route
            path="/Composer/ComposerContainer.jsx"
            element={<ComposerContainer />}
          ></Route>
          <Route
            path="/Login/LoginContainer.jsx"
            element={<LoginContainer />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
