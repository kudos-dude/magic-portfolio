import { createSelector } from "reselect";

import orm from "../orm";

export const selectEntities = state => state.entities;

export const getEntitiesSession = createSelector(
  selectEntities,
  entities => orm.session(entities),
);
