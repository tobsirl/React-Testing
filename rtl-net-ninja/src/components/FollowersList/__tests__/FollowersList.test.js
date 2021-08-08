import { render, screen } from '@testing-library/react'
import FollowersList from '../FollowersList'
import { BrowserRouter as Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { data } from './__fixtures__/FollowersList.fixtures'

const server = setupServer(
  rest.get('https://randomuser.me/api/?results=5', (req, res, ctx) => {
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

describe('tests for the <FollowersList /> component', () => {
  it('should render same text passed into title prop', async () => {
    render(<MockFollowersList />)

    const followerDivElements = await screen.findAllByTestId(/follower-item/i)

    expect(followerDivElements.length).toBe(5)
  })
})
