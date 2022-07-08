import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =(props)=>{
    const[isAdding, setIsAdding]=useState(false);
    const [isValid, setIsValid]=useState(true);

    const saveDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        if(props.items.title===0){
            console.log('Enter Title');
            setIsValid(false);
            return;
        }
        
        props.onAddNewExpense(expenseData);
        setIsAdding(false);
    };

    const startAddingHandler=()=>{
        setIsAdding(true);
    }

    const stopAddingHandler=()=>{
        setIsAdding(false);
    }

   
    return(
        <div className='new-expense'>
        {!isAdding && (
            <button onClick={startAddingHandler}>Add Expense</button>
        )}
        {
            isValid && isAdding && (
                <ExpenseForm 
                onSaveNewExpense={saveDataHandler}
                onCancel={stopAddingHandler} 
                />
                
            )
        }
        
        </div>
    )
}

export default NewExpense;