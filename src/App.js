import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedPalette from "./seedPalette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>}></Route>
        <Route
          excat
          path="/palette/:id"
          render={() => <h1>Individual Palette</h1>}
        ></Route>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedPalette[4])} />
      // </div>
    );
  }
}

export default App;
