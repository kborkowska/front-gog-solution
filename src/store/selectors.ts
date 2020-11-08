import { StoreState } from "../common/interfaces";
import { StateEntities, OwnershipState } from "../common/consts";

export const entitySelector = (entity: StateEntities) => (state: StoreState) =>
  state.get(entity);

export const idSelector = (entity: StateEntities) => (
  state: StoreState,
  id: string
) => state.get(entity).find((entry: any) => entry.get("id") === id);

export const inCartSelector = (entity: StateEntities) => (state: StoreState) =>
  state
    .get(entity)
    .filter((entry: any) => entry.get("state") === OwnershipState.InCart);
