import React from "react";
import List from "./components/list";

interface AppProps {}

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Job Chaser</h1>
      <List />
    </div>
  );
}

export default App;
