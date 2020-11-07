import initialState from "./initialState";
import { Action } from "../interfaces";
import { ActionTypes, StateEntities } from "../consts";

const reducer = (state = initialState, action: Action<any>) => {
  switch (action.type) {
    case ActionTypes.ChangeGameOwnershipState: {
      const gameIdx = state
        .get(StateEntities.Games)
        .findIndex(
          (game: Map<string, any>) => game.get("id") === action.payload.id
        );

      return state.setIn(
        [StateEntities.Games, gameIdx, "state"],
        action.payload.state
      );
    }
    default:
      return state;
  }
};

export default reducer;
