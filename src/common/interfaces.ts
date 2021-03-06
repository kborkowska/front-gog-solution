import { Map } from "immutable";

import { OwnershipState, StateEntities, ActionTypes } from "./consts";

export interface SmallGameSpotProps {
  key: string;
  imageSource: string;
  name: string;
  discount?: string;
  price: number;
  state: OwnershipState;
}

export type StoreState = Map<StateEntities, any>;

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}

export type ChangeOwnershipPayload = Pick<SmallGameSpotProps, "state" | "key">;

export type ChangeOwnershipAction = Action<ChangeOwnershipPayload>;

export type ClearCartAction = Action<null>;
