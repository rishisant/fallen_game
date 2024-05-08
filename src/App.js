import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Add all menu-slice components
import MainMenu from "./window-slices/MainMenu";
import AboutGame from "./window-slices/AboutGame";
import HowPlay from "./window-slices/HowPlay";
import GameIntro from "./window-slices/GameIntro";
import SelectionScreen from "./window-slices/SelectionScreen";
import GameScreen from "./window-slices/GameScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/about" element={<AboutGame />} />
        <Route path="/how-to-play" element={<HowPlay />} />
        <Route path="/game-intro" element={<GameIntro />} />
        <Route path="/selection-screen" element={<SelectionScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </Router>
  );
}

export default App;