import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedPalette from "./seedPalette";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./components/PaletteList";

class App extends Component {
  findPalette(id) {
    return seedPalette.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PaletteList palettes={seedPalette} />}
        ></Route>
        <Route
          excat
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            ></Palette>
          )}
        ></Route>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalette[4])} />
      // </div>
    );
  }
}

export default App;
