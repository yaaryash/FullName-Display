import React, { useState } from "react";
import "./App.css";

function App() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          required
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
          required
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
