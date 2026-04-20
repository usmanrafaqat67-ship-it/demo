import React from "react";

function Admin({ token }) {

  if (!token) {
    return <h2>🚫 Access Denied (Login Required)</h2>;
  }

  return (
    <div style={{ textAlign: "center" }}>

      <h1>🧑‍💼 Admin Dashboard</h1>

      <p>✔ You are logged in as Admin</p>

      {/* Your product add/delete system here */}

    </div>
  );
}

export default Admin;