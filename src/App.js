import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./shared/global";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button size="medium" appearance="primary">
        This is nice
      </Button>
    </div>
  );
}

export default App;
