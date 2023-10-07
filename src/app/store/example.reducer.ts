import {Action, createReducer, on} from "@ngrx/store";
import {ExampleActions} from "./example.action";

export interface State {
  count: number;
  updatedAt: number;
  message?: string;
  data?: any;
  errors?: any;
  dataLoading: boolean;
}
export const initialState: State = {
  count: 0,
  dataLoading: false,
  updatedAt: Date.now()
}

export const exampleReducer = createReducer(
  initialState,
  on(ExampleActions.increaseCount, (state) => ({
    ...state,
    count: state.count + 1
  })),
  on(ExampleActions.decreaseCount, (state) => ({
    ...state,
    count: state.count - 1
  })),
  on(ExampleActions.increaseDateFromOneMinute, (state) => ({
    ...state,
    updatedAt: state.updatedAt + 30000
  })),
  on(ExampleActions.sendMessage, (state, {message}) => ({
    ...state,
    message: message
  })),
  on(ExampleActions.getData, (state) => ({
    ...state,
    dataLoading: true
  })),
  on(ExampleActions.getDataSuccess, (state, {data}) => ({
    ...state,
    data: data,
    dataLoading: false
  })),
  on(ExampleActions.getDataError, (state, {error}) => ({
    ...state,
    errors: error
  })),
)
export const reducer = (state: State | undefined, action: Action) => {
  return exampleReducer(state, action)
}
