import React, { useEffect } from "react";
import logo from "./logo.svg";
// import "./App.css";
// import "./App.scss";
import "./styles/Main.scss";
import Home from "./pages/Home";
import useWindowResize from "./customHooks/useWindowResize";

function App() {
  useWindowResize();

  return <Home />;
}

export default App;
