import { render, screen, fireEvent } from '@testing-library/react'
import AddInput from '../AddInput'

const mockSetTodo = jest.fn()

describe('tests for the <AddInput /> component', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />)

    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)

    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type into input', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />)

    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const addBtn = screen.getByRole('button', { name: /add/i })

    fireEvent.change(inputElement, { target: { value: 'walk the dog' } })
    fireEvent.click(addBtn)

    expect(inputElement.value).toBe('')
  })
})
