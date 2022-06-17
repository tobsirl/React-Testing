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

  const summaryHeading = screen.getByRole('heading', { name: /order summary/i })
  expect(summaryHeading).toBeInTheDocument()

  const scoopsHeading = screen.getByRole('heading', { name: 'scoops: $6.00' })
  expect(scoopsHeading).toBeInTheDocument()

  const toppingsHeading = screen.getByRole('heading', {
    name: 'Toppings: $1.50',
  })

  expect(toppingsHeading).toBeInTheDocument()

  expect(screen.getByText('1 Vanilla')).toBeInTheDocument()
  expect(screen.getByText('2 Chocolate')).toBeInTheDocument()
  expect(screen.getByText('3 Cherries')).toBeInTheDocument()

  const tcCheckbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })

  userEvent.click(tcCheckbox)

  const confirmOrderButton = screen.getByRole('button', {
    name: /confirm order/i,
  })

  userEvent.click(confirmOrderButton)
})
