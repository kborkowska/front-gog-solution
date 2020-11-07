import { fromJS } from "immutable";
import { uuid } from "uuidv4";

import Oddworld from "../games/oddworld.png";
import Chaos from "../games/chaos.png";
import Settlers from "../games/settlers.png";
import Neverwinter from "../games/neverwinter.png";
import Assasin from "../games/assasin.png";

import { OwnershipState } from "../consts";
import { StoreState } from "../interfaces";

const initialState: StoreState = fromJS({
  games: [
    {
      id: uuid(),
      imageSource: Oddworld,
      name: "oddworld: stranger's wrath",
      discount: "-50%",
      price: 9.99,
      state: OwnershipState.Available,
    },
    {
      id: uuid(),
      imageSource: Chaos,
      name: "chaos on deponia",
      price: 9.99,
      state: OwnershipState.Owns,
    },
    {
      id: uuid(),
      imageSource: Settlers,
      name: "the settlers 2: gold edition",
      price: 5.99,
      state: OwnershipState.InCart,
    },
    {
      id: uuid(),
      imageSource: Neverwinter,
      name: "neverwinter nights",
      discount: "-50%",
      price: 4.99,
      state: OwnershipState.Available,
    },
    {
      id: uuid(),
      imageSource: Assasin,
      name: "assassin's creed: director's cut",
      price: 9.99,
      state: OwnershipState.InCart,
    },
  ],
});

export default initialState;
