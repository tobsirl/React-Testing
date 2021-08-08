import { render, screen } from '@testing-library/react'
import FollowersList from '../FollowersList'
import { BrowserRouter as Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { data } from './__fixtures__/FollowersList.fixtures'

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(ctx.json(data.results))
  }),
)

function MockFollowersList() {
  return (
    <Router>
      <FollowersList />
    </Router>
  )
}

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})

describe('tests for the <FollowersList /> component', () => {
  it.skip('should render same text passed into title prop', async () => {
    render(<MockFollowersList />)

    const followerDivElements = await screen.findAllByTestId(/follower-item/i)

    expect(followerDivElements.length).toBe(5)
  })

  it('should test for the data from the api', () => {
    render(<MockFollowersList />)
    screen.debug()
  })
})
