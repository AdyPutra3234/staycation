import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";

// Style
import '../src/assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage location={window.location}/>}/>
          <Route exact path="/properties/:id" element={<DetailPage location={window.location}/>}/>
          <Route path="/checkout" element={<CheckoutPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
