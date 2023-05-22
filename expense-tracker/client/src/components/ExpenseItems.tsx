import React from 'react'
import { Table } from 'react-bootstrap'
import IExpenseItems from '../model/IExpenseItem'
import { format } from 'date-fns';


type Props = {
    expenseItems : IExpenseItems[];
}

export const ExpenseItems = ({expenseItems}:Props) => {
    const dateToString =(date:Date)=>{
        try {
        return format(date , "yyyy-mm-dd");
       } catch (error){
        return format(new Date() , "yyyy-mm-dd");
       }
    }

  return (
    <>   
      <Table striped bordered hover  responsive="sm">
      <thead className='theader'>
        <tr>
          <th>#</th>
          <th>Expense Description</th>
          <th>Payee Name</th>
          <th>Expense date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className='tbody'>
      {
        expenseItems.map(({date  , expenseDescription ,id , payeeName , price },index)=>{
            return (
                
                    <tr key={id}>
                        <td>{index + 1}</td>
                        <td>{expenseDescription}</td>
                        <td>{payeeName}</td>
                        <td>{dateToString(date)}</td>
                        <td>{price}</td>
                    </tr>   
            )
        })
      }
      </tbody>
    </Table>
    
    </>
  )
}
