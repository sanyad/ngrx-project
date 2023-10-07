import {exampleReducer, initialState} from "./example.reducer";
import {ExampleActions} from "./example.action";

describe('exampleReducer', () => {
  it('it should increase count', () => {
    const result = exampleReducer(initialState, ExampleActions.increaseCount).count;
    expect(result).toBe(initialState.count + 1)
  })
})

