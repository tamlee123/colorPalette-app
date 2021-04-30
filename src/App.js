import React, { Component } from "react";
import Palette from "./components/Palette";
import seedPalette from "./seedPalette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedPalette[4]));
    return (
      <div>
        <Palette {...seedPalette[4]} />
      </div>
    );
  }
}

export default App;
