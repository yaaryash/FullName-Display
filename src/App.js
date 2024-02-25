import React, { useState } from "react";
import "./App.css";

function App() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError("Please enter both first name and last name.");
      setFullName("");
    } else {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
      setError("");
    }
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <button type="submit">Submit</button>
      {fullName && <div>Full Name: {fullName}</div>}
    </form>
  );
}

export default App;
