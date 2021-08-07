import { render, screen } from '@testing-library/react'
import FollowersList from '../FollowersList'
import { BrowserRouter as Router } from 'react-router-dom'

function MockFollowersList() {
  return (
    <Router>
      <FollowersList />
    </Router>
  )
}

describe('tests for the <FollowersList /> component', () => {
  it('should render same text passed into title prop', async () => {
    render(<MockFollowersList />)

   

    expect(headingElement).toBeInTheDocument()
  })
})
