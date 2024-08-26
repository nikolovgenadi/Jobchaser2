import React from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavbarComponent />
      <h1>Job Chaser</h1>
      <List />
    </div>
  );
}

export default App;
