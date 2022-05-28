import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import People from './components/People'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const PERSON_DATA = [
  {
    name: 'Luke Skywalker',
    // height: '172',
    // mass: '77',
    // hair_color: 'blond',
    // skin_color: 'fair',
    // eye_color: 'blue',
    // birth_year: '19BBY',
    // gender: 'male',
    // homeworld: 'https://swapi.dev/api/planets/1/',
    // films: [
    //   'https://swapi.dev/api/films/1/',
    //   'https://swapi.dev/api/films/2/',
    //   'https://swapi.dev/api/films/3/',
    //   'https://swapi.dev/api/films/6/',
    // ],
    // species: [],
    // vehicles: [
    //   'https://swapi.dev/api/vehicles/14/',
    //   'https://swapi.dev/api/vehicles/30/',
    // ],
    // starships: [
    //   'https://swapi.dev/api/starships/12/',
    //   'https://swapi.dev/api/starships/22/',
    // ],
    // created: '2014-12-09T13:50:51.644000Z',
    // edited: '2014-12-20T21:17:56.891000Z',
    // url: 'https://swapi.dev/api/people/1/',
  },
]

const server = setupServer(
  rest.get('https://swapi.dev/api/people', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: PERSON_DATA,
      }),
    )
  }),
)

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})

afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})

describe('tests for the <People /> component', () => {
  it('should test for the name of people', async () => {
    render(<People />)

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i))

    expect(screen.getByText(PERSON_DATA[0].name)).toBeInTheDocument()
  })
})
