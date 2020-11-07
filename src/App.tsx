import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

import { MainGame } from "./components/main-game/main-game";
import { SecondaryGameSpots } from "./components/secondary-game-spots/secondary-game-spots";
import { TopBar } from "./components/top-bar/top-bar";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        <div className="background-gradient">
          <MainGame />
          <SecondaryGameSpots />
        </div>
      </div>
    </Provider>
  );
};

export default App;
