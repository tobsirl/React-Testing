import { fireEvent, render, screen } from '@testing-library/react'
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

    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /add/i })

    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shopping' } })
    fireEvent.click(buttonElement)
  })
})
