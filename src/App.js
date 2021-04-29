import Palette from "./components/Palette";
import seedPalette from "./seedPalette";
import "./App.css";

function App() {
  return (
    <div>
      <Palette {...seedPalette[5]} />
    </div>
  );
}

export default App;
