import React, { useState } from 'react';
import Expenses from "./Expenses"
import Card from '../UI/Card';

import ExpenseChart from './ExpenseChart';
import './AllExpenses.css';
import ExpenseList from './ExpenseList';

import ExpenseFilter from "./ExpenseFilter";
const AllExpense=(props) =>{
    const [filteredYear, setFilterYear]=useState('2020');
    const filterChangeHandler= (selectYear)=>{
        setFilterYear(selectYear)
    };

    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })


    return (
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>

        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>

            
        </Card>
    )
}

export default AllExpense;