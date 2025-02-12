import React, { useState } from "react";
//import axios from "axios";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  console.log(username);
  console.log(password);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { username, password }
      );
      console.log(data.data);
      if (data.data.success) {
        setToken(data.data.token);
        setSuccess(true);
        setUsername("");
        setPassword("");
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <div>
      <h2>SignUpForm</h2>
      {error?.message && <p>Error signing up!</p>}
      {success && <p>Successfully Signed Up!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>UserName:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button style={{ marginTop: "15px", display: "block" }}>Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;