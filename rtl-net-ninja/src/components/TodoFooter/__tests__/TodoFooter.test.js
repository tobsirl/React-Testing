import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'

const Mock

it('should render the correct amount of incomplete tasks', async () => {
  render(<TodoFooter numberOfIncompleteTasks={5} />)

  const paraElement = screen.getByText(/5 tasks left/i)

  expect(paraElement).toBeInTheDocument()
})
