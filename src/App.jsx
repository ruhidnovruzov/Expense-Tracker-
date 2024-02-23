import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './store/features/index';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const amount = parseFloat(inputValue);
    if (amount < 0) {
      dispatch(decrease(-amount));
    } else {
      dispatch(increase(amount)); 
    }
    setInputValue('');
  };

  const {income, expense} = useSelector((state)=> state.expense)
  console.log(expense, income)


  return (
    <div className='container'>
      <div className="tracker-container">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h3>Your balance:</h3>
        <h1>$ {income-expense}</h1>
      </div>
    <div className="money">
      <div className="expense">
        <span>Expense: </span>
        <h2> $ {expense}</h2>
      </div>
      <div className="income">
        <span>Income: </span>
        <h2> $ {income}</h2>
      </div>
    </div>
    <div className="input">
    <input
      type="number"
      value={inputValue}
      onChange={handleChange}
      placeholder="Enter amount"
    /> <br />
    <button onClick={handleSubmit}>Submit</button>
    </div>
      </div>
  </div>
);
}

export default App;
