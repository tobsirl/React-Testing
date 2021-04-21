import {render, screen} from '@testing-library/react'
import App from './App'

describe('tests for the Counter component', () => {
  it('should check for count: 0', () => {
    render(<App />)

    const countText = screen.getByRole('heading', {name: /count: 0/i})
    
    expect(countText).toBeInTheDocument()
  })

})
