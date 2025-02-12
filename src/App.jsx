import React, { useState } from "react";

import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <h2>
        Token: <p>{token}</p>
      </h2>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;