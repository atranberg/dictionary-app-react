import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultSearchword="forest" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
