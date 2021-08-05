import { render, screen } from '@testing-library/react'
import AddInput from '../AddInput'

const mockSetTodo = jest.fn()

describe('tests for the <AddInput /> component', () => {
  it('should render input element', async () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />)

    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)

    expect(inputElement).toBeInTheDocument()
  })
})
