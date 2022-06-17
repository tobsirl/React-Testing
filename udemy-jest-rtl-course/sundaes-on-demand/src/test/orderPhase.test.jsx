import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

it('order phases for happy path', async () => {
  // render app
  render(<App />)
  // add ice cream scoops and toppings
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: /vanilla/i,
  })
  // find and click order button
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')

  const chocolateInput = screen.getByRole('spinbutton', { name: /chocolate/i })
  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2')

  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: /cherries/i,
  })

  userEvent.click(cherriesCheckbox)

  const orderSummaryButton = screen.getByRole('button', {
    name: /order sundae/i,
  })

  userEvent.click(orderSummaryButton)
})
