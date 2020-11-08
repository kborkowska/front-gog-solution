import { fromJS } from "immutable";
import { v4 } from "uuid";

import Oddworld from "../games/oddworld.png";
import Chaos from "../games/chaos.png";
import Settlers from "../games/settlers.png";
import Neverwinter from "../games/neverwinter.png";
import Assasin from "../games/assasin.png";

import { OwnershipState } from "../common/consts";
import { StoreState } from "../common/interfaces";

const initialState: StoreState = fromJS({
  games: [
    {
      key: v4(),
      imageSource: Oddworld,
      name: "oddworld: stranger's wrath",
      discount: "-50%",
      price: 9.99,
      state: OwnershipState.Available,
    },
    {
      key: v4(),
      imageSource: Chaos,
      name: "chaos on deponia",
      price: 9.99,
      state: OwnershipState.Owns,
    },
    {
      key: v4(),
      imageSource: Settlers,
      name: "the settlers 2: gold edition",
      price: 5.99,
      state: OwnershipState.InCart,
    },
    {
      key: v4(),
      imageSource: Neverwinter,
      name: "neverwinter nights",
      discount: "-50%",
      price: 4.99,
      state: OwnershipState.Available,
    },
    {
      key: v4(),
      imageSource: Assasin,
      name: "assassin's creed: director's cut",
      price: 9.99,
      state: OwnershipState.InCart,
    },
  ],
});

export default initialState;
