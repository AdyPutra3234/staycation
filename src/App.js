import React from "react"
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Style
import '../src/assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage location={window.location}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
