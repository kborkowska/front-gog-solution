import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import { GameSpot } from "./components/game-spot/game-spot";
import { SmallGameSpots } from "./components/small-game-spots/small-game-spots";
import { TopBar } from "./components/top-bar/top-bar";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <div className="background-gradient">
          <GameSpot />
          <SmallGameSpots />
        </div>
      </div>
    </Provider>
  );
};

export default App;
