import React from 'react'
import { Table } from 'react-bootstrap'
import IExpenseItems from '../model/IExpenseItem'
import { getAllUniquePayeeNames } from '../util/ExpenseUtils'

type Props = {
    expenseItems : IExpenseItems[]
}
export const ExpenseSummary = ({expenseItems}:Props) => {

    const calculateTotalExpensesByPayee = (payeeName : string) => {
        let totalExpense = 0;
        expenseItems.forEach((expenseItem)=>{
            if(expenseItem.payeeName === payeeName){
                totalExpense += expenseItem.price
            }
        })
        return totalExpense;
    }

    const calculateGrandTotal = () => {
        let grandTotal = 0;
        expenseItems.forEach((expenseItem)=>{
                grandTotal += expenseItem.price
        })
        return grandTotal;
    }

    const calculatePendingAmount = (payeeName : string) => {
         const totalExpense = calculateGrandTotal();
         const totalExpensesByPayee = calculateTotalExpensesByPayee(payeeName);
         const halfAmount = totalExpense / getAllUniquePayeeNames(expenseItems).length;
         if(totalExpensesByPayee >= halfAmount){
            return;
         } else {
            return (halfAmount - totalExpensesByPayee);
         }
    }


  return (
    <>
      <Table striped bordered hover >
      <thead className='theader'>
        <tr>
          <th>#</th>
          <th>Payee Name</th>
          <th>Total Expenses</th>
        </tr>
      </thead>
      
      <tbody className='tbody1'>
         { 
         getAllUniquePayeeNames(expenseItems).map((payeeName , index)=>{
            return (
                <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{payeeName}</td>
                    <td>{calculateTotalExpensesByPayee(payeeName)}</td>
                </tr>
            )
         })
         }
         <tr>
                    <td></td>
                    <td>Grand Total</td>
                    <td>{calculateGrandTotal()}</td>
        </tr>
      </tbody>
    </Table>

            <Table striped bordered hover  responsive="sm">
            <thead className='theader'>
                <tr>
                <th>#</th>
                <th>Payee Name</th>
                <th>Total Expenses</th>
                </tr>
            </thead>
            <tbody className='tbody2'>
                { 
                getAllUniquePayeeNames(expenseItems).map((payeeName , index)=>{
                    return (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{`${payeeName}  ==>  `}</td>
                            <td>{calculatePendingAmount(payeeName)}</td>
                        </tr>
                    )
                })
                }
            </tbody>
            </Table>
    </>
  )
}
