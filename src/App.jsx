import React, { useState } from "react";
import './App.css';

import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App" id="container">
      <h2>
        Token: <p>{token}</p>
      </h2>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;