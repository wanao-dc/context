import { useReducer } from 'react';
import Button from '../../components/Button';
import Panel from '../../components/Panel';
import { CounterPageConstants } from './constants';
import { CounterPageReducer } from './reducer';

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(CounterPageReducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const { count, valueToAdd } = state;

  const increment = () => {
    // setCount(prev => prev + 1);
    dispatch({
      type: CounterPageConstants.INCREMENT,
    });
  };
  const decrement = () => {
    // setCount(prev => prev - 1);
    dispatch({
      type: CounterPageConstants.DECREMENT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: CounterPageConstants.CHANGE_VALUE_TO_ADD,
      payload: value,
    })
    // setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: CounterPageConstants.SUBMIT_FORM,
      payload: {
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    })
    // setCount(prev => prev + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
