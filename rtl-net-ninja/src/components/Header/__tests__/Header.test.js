import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('tests for the <Header /> component', () => {
  it('should render same text passed into title prop', async () => {
    render(<Header title="My Header" />)

    const headingElement = screen.getByText(/my header/i)

    expect(headingElement).toBeInTheDocument()
  })
})
