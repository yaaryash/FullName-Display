import "./App.css";
import { useState } from "react";

function App() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [fullName, setFullName] = useState("");
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
  }
  return (
    <form className="App" onChange={handleSubmit}>
      <h1>Full Name Display</h1>
      <div>
        <label for="firstName">First Name: </label>
        <input
          required
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
      </div>
      <div>
        <label for="lastName">Last Name: </label>
        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />
      </div>
      <button type="submit">Submit</button>
      {fullName && <div>Full Name: {fullName}</div>}
    </form>
  );
}

export default App;
