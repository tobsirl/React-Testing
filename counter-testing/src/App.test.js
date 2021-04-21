import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('tests for the Counter component', () => {
  it('should check for count: 0', () => {
    render(<App />)

    const countText = screen.getByRole('heading', {name: /count: 0/i})

    expect(countText).toBeInTheDocument()
  })

  it('should check that the increment button works', () => {
    render(<App />)

    const decrement = screen.getByRole('button', {name: /decrement/i})

    const countText = screen.getByRole('heading', {name: /count: 0/i})

    userEvent.click(decrement)

    expect(countText).toHaveTextContent('Count: -1')
  })
})
