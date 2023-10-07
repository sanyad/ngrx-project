import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State} from "./example.reducer";

export namespace ExampleSelectors {
  export const state = createFeatureSelector<State>('example');
  export const count = createSelector(state, (state) => state.count);
  export const updateAt = createSelector(state, (state) => state.updatedAt);
  export const message = createSelector(state, (state) => state.message);
  export const data = createSelector(state, (state) => state.data);
  export const dataErrors = createSelector(state, (state) => state.errors);
  export const dataLoading = createSelector(state, (state) => state.dataLoading);
}
