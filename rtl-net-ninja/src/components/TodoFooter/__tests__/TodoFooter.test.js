import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter as Router } from 'react-router-dom'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  )
}

it('should render the correct amount of incomplete tasks', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />)

  const paraElement = screen.getByText(/5 tasks left/i)

  expect(paraElement).toBeInTheDocument()
})

it('should render "task" when the number of incomplete tasks is one', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />)

  const paraElement = screen.getByText(/1 task left/i)

  expect(paraElement).toBeInTheDocument()
})
