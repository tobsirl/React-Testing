import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Todo from '../Todo'

function MockTodo() {
  return (
    <Router>
      <Todo />
    </Router>
  )
}

describe('tests for the <Todo /> component', () => {
  it('should render same text passed into title prop', async () => {
    render(<MockTodo />)
    
  })
})
