import { render, screen } from '@testing-library/react'
import People from './components/People'

describe('tests for the <People /> component', () => {
  it('should test for the name of people', async () => {
    render(<People />)

    screen.debug()
  })
})
