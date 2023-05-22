import React from 'react'
import  'bootstrap//dist/css/bootstrap.min.css';
import { ExpenseTracker } from './components/ExpenseTracker';
import { Container } from 'react-bootstrap';
import { NavigationBar } from './components/NavigationBar';
import './App.css'


 const App = () => {
  return (
    <>
      <NavigationBar/>
      <Container>
        <ExpenseTracker/>
      </Container>
    </>
  )
}

export default App;
