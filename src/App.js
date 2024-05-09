import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainMenu from "./window-slices/MainMenu";
import WhyPlay from "./window-slices/WhyPlay";
import HowPlay from "./window-slices/HowPlay";
import StartCutscene from "./window-slices/StartCutscene";
import BugTest from "./window-slices/BugTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Why" element={<WhyPlay />} />
        <Route path="/How" element={<HowPlay />} />
        <Route path="/Start" element={<StartCutscene />} />
        <Route path="/Bug" element={<BugTest />} />
      </Routes>
    </Router>
  );
}

export default App;