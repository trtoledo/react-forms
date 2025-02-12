import React, { useState } from "react";
//import axios from "axios";

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log("calling authentication");
  async function handleClick() {
    console.log("authenticating...");
    try {
      const result = await axios(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(result);
      if (result.data.success) {
        setSuccess(true);
      }
      if (result.data.message === "jwt malformed") {
        throw new Error("invalid token");
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p>Error Authenticating ({error}), please try again!</p>}
      {success && <p>Authenticated successfully</p>}
      <button onClick={handleClick}>Authenticate Here</button>
    </div>
  );
}

export default Authenticate;