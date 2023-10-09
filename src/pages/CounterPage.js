import { useState, useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state,action) => {
  if (action.type==='increment') {
    return {
      ...state,
      count:state.count+1,
    }
  }
  else if (action.type==='decrement') {
    return {
      ...state,
      count:state.count-1,
    }
  }
  else if (action.type==='change-value-to-add') {
    return {
      ...state,
      valueToAdd:action.payload,
    } 
  }
  else if (action.type==='submit-form') {
    return {
      ...state,
      count:state.count+state.valueToAdd,
      valueToAdd:0,
    } 
  }

  
  
}

function CounterPage({ initialCount }) {
 
//  const [count, setCount] = useState(initialCount);
//  const [valueToAdd, setValueToAdd] = useState(0);

const [state,dispatch] = useReducer(reducer, {
  count:initialCount,
  valueToAdd:0,
})

  const increment = () => {
  //  setCount(prev => prev + 1);
    dispatch({
    type:'increment',
    });
  };
  const decrement = () => {
   // setCount(prev => prev - 1);
   dispatch({
    type:'decrement',
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

   // setValueToAdd(value);
   dispatch({
    type:'change-value-to-add',
    payload:value,
    });


  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type:'submit-form', 
      });

   // setCount(prev => prev + valueToAdd);
   // setValueToAdd(0);
  };

const{count,valueToAdd} = state

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
