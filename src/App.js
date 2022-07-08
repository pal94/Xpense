import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import AllExpenses from './components/Expenses/AllExpense'


function App() {

  const DUMMY = [
    {id:'e1', title: 'Food Delivery', price: 34, date: new Date(2021,2,27)},
    {id:'e2',title: 'Car Insuarance', price: 240, date: new Date(2021,4,12)},
  ];

  const [expense, setExpense]=useState(DUMMY);

  const newExpenseHandler=(exp)=>{
    setExpense((prevExpense)=>{
      return [exp, ...prevExpense];
    });
  };
  
  return (
    <div className="App">
    <NewExpense onAddNewExpense={newExpenseHandler}/>
    <AllExpenses items={expense}
    />
    </div>
  );
}

export default App;
