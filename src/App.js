import Main from "./Components/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
var Spotify = require("spotify-web-api-js");

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
