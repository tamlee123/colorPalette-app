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
  //using routeProps for history in PaletteList
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedPalette} {...routeProps} />
          )}
        ></Route>
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            ></Palette>
          )}
        ></Route>
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <h1>Single Color Page</h1>}
        ></Route>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalette[4])} />
      // </div>
    );
  }
}

export default App;
