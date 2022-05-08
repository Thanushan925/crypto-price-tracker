import React from "react";
import "./App.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from "./routes/Main";
import Currency from "./routes/Currency";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currency/:id" element={<Currency />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;