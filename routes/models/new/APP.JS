import React, { useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div>

      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Admin token={token} />
      )}

    </div>
  );
}

export default App;