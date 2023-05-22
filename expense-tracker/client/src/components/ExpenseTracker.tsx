import React, { useEffect, useState } from 'react'
import IExpenseItems from '../model/IExpenseItem'
import { getAllExpenseItem } from '../service/Expense';
import { ExpenseItems } from './ExpenseItems';
import { ExpenseSummary } from './ExpenseSummary';
import { ExpenseCreator } from './ExpenseCreator';
import { Container } from 'react-bootstrap';

export const ExpenseTracker = () => {

  const [expenseItems , setExpenseItems] = useState< IExpenseItems[] | [] >([]);

  useEffect(()=>{

      const fetchData = async ()=>{
        const response = await getAllExpenseItem();
        setExpenseItems(response)
      }
      fetchData();
    } , []
  )

  const refreshForNewExpenseAddition = (newExpenseItem : IExpenseItems) => {
     setExpenseItems(
      [newExpenseItem , ...expenseItems]
     )
  };

  return (
    <Container>
      <h2 className='my-3'>
        Expense Tracker Application
        <ExpenseCreator expenseItems={expenseItems} refreshForNewExpenseAddition={refreshForNewExpenseAddition}/>
      </h2>
       <ExpenseItems expenseItems = {expenseItems}/>
       <ExpenseSummary expenseItems={expenseItems} />
    </Container>
  )
}
