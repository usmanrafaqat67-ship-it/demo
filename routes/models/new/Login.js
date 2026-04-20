import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);

      alert("Login Success ✅");

    } catch (err) {
      alert("Login Failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>

      <h1>🔐 Admin Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={login}>Login</button>

    </div>
  );
}

export default Login;