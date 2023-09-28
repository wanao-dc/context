import { CounterPageConstants } from './constants';

export const CounterPageReducer = (state, action) => {
  switch (action.type) {
    case CounterPageConstants.INCREMENT:
      state.count = state.count + 1
      return;
    case CounterPageConstants.DECREMENT:
      state.count = state.count - 1
      return;
    case CounterPageConstants.CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case CounterPageConstants.SUBMIT_FORM:
      state.count =  state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
}
