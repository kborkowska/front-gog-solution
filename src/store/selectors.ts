import { StoreState } from "../interfaces";
import { StateEntities } from "../consts";

export const entitySelector = (entity: StateEntities) => (state: StoreState) =>
  state.get(entity);

export const idSelector = (entity: StateEntities) => (
  state: StoreState,
  id: string
) => state.get(entity).find((entry: any) => entry.get("id") === id);
