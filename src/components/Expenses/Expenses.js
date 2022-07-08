import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses=(props) =>{
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
        </Card>
    )
}

export default Expenses;