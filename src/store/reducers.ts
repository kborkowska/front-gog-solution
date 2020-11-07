import initialState from "./initialState";
import { Action } from "../interfaces";
import { ActionTypes, OwnershipState, StateEntities } from "../consts";

const reducer = (state = initialState, action: Action<any>) => {
  switch (action.type) {
    case ActionTypes.ChangeGameOwnershipState: {
      const gameIdx = state
        .get(StateEntities.Games)
        .findIndex(
          (game: Map<string, any>) => game.get("key") === action.payload.key
        );

      return state.setIn(
        [StateEntities.Games, gameIdx, "state"],
        action.payload.state
      );
    }
    case ActionTypes.ClearCart:
      const inCartGames = state
        .get(StateEntities.Games)
        .map((game: Map<string, any>) =>
          game.get("state") === OwnershipState.InCart
            ? game.set("state", OwnershipState.Available)
            : game
        );

      return state.set(StateEntities.Games, inCartGames);
    default:
      return state;
  }
};

export default reducer;
