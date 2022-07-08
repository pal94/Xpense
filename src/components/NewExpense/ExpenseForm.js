import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isValidProps, setIsValidProps]=useState(true);
    const titleChangeHandler = (event) => {
        if(!props.setIsValid){
            console.log('Enter Title');
            setIsValidProps(false);
            return;
        }
        setEnteredTitle(event.target.value);
    };
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submithandler=(event)=>
    {
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate)
        }

        
            props.onSaveNewExpense(expenseData);
    

            setEnteredTitle('');
            setEnteredPrice('');
            setEnteredDate('');
        
    }
    return (
        <form onSubmit={submithandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label style={{color: !isValidProps ?'red':'black'}}>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Price</label>
                    <input type='number' min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;