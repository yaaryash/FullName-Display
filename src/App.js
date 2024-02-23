import "./App.css";

function App() {
  return (
    <form className="App">
      <h1>Full Name Display</h1>
      <div>
        <label for="fullName">First Name: </label>
        <input type="text" id="fullName" name="fav_language" value="" />
      </div>
      <div>
        <label for="lastName">Last Name: </label>
        <input type="text" id="lastName" name="fav_language" value="" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
