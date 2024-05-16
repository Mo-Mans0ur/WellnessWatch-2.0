import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome to WellnessWatch</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/loginPage">Login</Link>
      <Link to="/registrationPage">Register</Link>
    </div>
  );
};

export default App;