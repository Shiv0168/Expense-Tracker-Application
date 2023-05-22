import React, { FormEvent, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { getAllUniquePayeeNames } from '../util/ExpenseUtils';
import IExpenseItems, { IExpenseCreateItem } from '../model/IExpenseItem';
import { createExpenseItem } from '../service/Expense';

type Props = {
    expenseItems : IExpenseItems[] ,
    refreshForNewExpenseAddition : (newExpenseItem : IExpenseItems) => void
}

export const ExpenseCreator = ({expenseItems , refreshForNewExpenseAddition} : Props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const expenseDescriptionRef = useRef<HTMLInputElement>(null);
    const payeeNameRef = useRef<HTMLSelectElement>(null);
    const expenseDateRef = useRef<HTMLInputElement>(null);
    const expensePriceRef = useRef<HTMLInputElement>(null);

    const handleAddExpenses = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const expenseDescription = (expenseDescriptionRef?.current?.value as string);
        const payeeName = (payeeNameRef?.current?.value as string);
        const expenseDate = new Date((expenseDateRef?.current?.value as string));
        const expensePrice = parseFloat((expensePriceRef?.current?.value as string));

        const newExpenseItem : IExpenseCreateItem = {
            expenseDescription : expenseDescription ,
            payeeName : payeeName ,
            date : expenseDate ,
            price : expensePrice
        }

        const response = await createExpenseItem(newExpenseItem);
        refreshForNewExpenseAddition(response);

        handleClose();
    }

  return (
    <>
    <Button variant="primary" onClick={handleShow} className='my-2 float-end'>New expense item</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='form'>
          <Modal.Title>Add expenses</Modal.Title>
        </Modal.Header >
        <Modal.Body className='form'>
        <Form onSubmit={handleAddExpenses} className='form'>
      <Form.Group className="mb-3" controlId="expenseDescription">
        <Form.Label>Expense Dsecription</Form.Label>
        <Form.Control type="text" placeholder="Enter expense description here" ref={expenseDescriptionRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="payeeName">
        <Form.Label>Payee Name</Form.Label>

        <Form.Select aria-label="Default select example" ref={payeeNameRef}>
            <option >== select a payee name ==</option>
            {
                getAllUniquePayeeNames(expenseItems).map((payeeName) => {
                    return(
                        <option value={payeeName}>{payeeName}</option>
                    )
                })
            }    
       </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="expenseDate">
        <Form.Label>Expense Date</Form.Label>
        <Form.Control type="date" placeholder="Enter expense date" ref={expenseDateRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="expensePrice">
        <Form.Label>Expense Price</Form.Label>
        <Form.Control type="number" placeholder="Enter expense price here" ref={expensePriceRef}/>
      </Form.Group>
      <Button variant="primary" type="submit">Add Expense</Button>
      <Button variant="secondary" onClick={handleClose}  className='mx-3'>Close</Button>
    </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
