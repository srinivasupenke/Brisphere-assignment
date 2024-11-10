import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Bookingpage from "./pages/Bookingpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/booking" Component={Bookingpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
