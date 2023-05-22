import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NavigationBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" >
          {' '}
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
