import * as React from "react";
import "./styles.css";
import { IntroMessage, OutroMessage } from "./Message";
import { Search } from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>How to test Recoil</h1>
      <IntroMessage />
      <hr />
      <h2>The code we're testing:</h2>
      <Search />
      <hr />
      <OutroMessage />
    </div>
  );
}
