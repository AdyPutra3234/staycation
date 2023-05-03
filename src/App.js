import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from 'history';

import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";

// Style
import '../src/assets/scss/style.scss';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
})

function App() {

  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<LandingPage location={window.location}/>}/>
          <Route exact path="/properties/:id" element={<DetailPage location={window.location}/>}/>
          <Route path="/checkout" element={<CheckoutPage location={window.location}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
