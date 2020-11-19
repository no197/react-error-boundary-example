import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import CardList from "./components/CardList";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const [chooseError, setChooseError] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <h1>
          <span role="img" aria-label="img">
            🌽 Node Farm 🥦
          </span>
        </h1>
      </div>
      <ErrorBoundary
        FallbackComponent={ErrorComponent}
        resetKeys={[chooseError]}
        onReset={setChooseError}
      >
        <CardList chooseError={chooseError} />
      </ErrorBoundary>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
