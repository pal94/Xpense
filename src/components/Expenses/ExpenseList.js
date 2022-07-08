import React from 'react';

import Expenses from './Expenses';
import './ExpenseList.css';

const ExpenseList=(props)=>{

    if(props.items.length===0){
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>;
    }

        return (
            <ul className='expenses-list'>
            {props.items.map(expense => (
                <Expenses
                key={expense.id} 
                title={expense.title} 
                price={expense.price} 
                date={expense.date}
                />
            ))}
            </ul>
        )
        
}

export default ExpenseList;