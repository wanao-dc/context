import { CounterPageConstants } from './constants';

export const CounterPageReducer = (state, action) => {
  switch (action.type) {
    case CounterPageConstants.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case CounterPageConstants.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case CounterPageConstants.CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload
      }
    case CounterPageConstants.SUBMIT_FORM:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }
}
