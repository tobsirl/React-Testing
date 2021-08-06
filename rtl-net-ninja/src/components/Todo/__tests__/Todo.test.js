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

function addTodo(tasks) {
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole('button', { name: /add/i })
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } })
    fireEvent.click(buttonElement)
  })
}

describe('tests for the <Todo /> component', () => {
  it('should render same text passed into title prop', async () => {
    render(<MockTodo />)

    addTodo(['Go Grocery Shopping'])

    const divElement = screen.getByText(/go grocery shopping/i)
    expect(divElement).toBeInTheDocument()
  })

  it('should render same text passed into title props', async () => {
    render(<MockTodo />)

    addTodo(['Go Grocery Shopping', 'Walk the dog', 'Feed the fish'])

    const [task1, task2, task3] = screen.getAllByTestId(/task-container/i)

    expect(task1).toHaveTextContent(/go grocery shopping/i)
    expect(task2).toHaveTextContent(/walk the dog/i)
    expect(task3).toHaveTextContent(/feed the fish/i)
  })

  it('task should not have completed class when initially rendered', async () => {
    render(<MockTodo />)

    addTodo(['Go Grocery Shopping'])

    const divElement = screen.getByText(/go grocery shopping/i)

    expect(divElement).not.toHaveClass('todo-item-active')
  })
})
