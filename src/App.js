import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultSearchword="forest" />
      </div>
    </div>
  );
}

export default App;
