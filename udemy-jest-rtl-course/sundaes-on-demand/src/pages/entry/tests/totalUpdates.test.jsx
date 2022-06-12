import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import OrderEntry from '../OrderEntry'

it('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />)

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: /vanilla/i,
  })

  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: /chocolate/i,
  })

  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent('6.00')
})

it('update toppings subtotal when toppings change', async () => {
  render(<Options optionType="toppings" />)

  // make sure total starts out $0.00
  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  })
  expect(toppingsSubtotal).toHaveTextContent('0.00')

  // add cherries and check total
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: /cherries/i,
  })

  userEvent.click(cherriesCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')

  // add hot fudge and check subTotal
  const hotFudgeCheckbox = await screen.findByRole('checkbox', {
    name: /hot fudge/i,
  })
  userEvent.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('3.00')

  // remove hot fudge and check subtotal
  userEvent.click(hotFudgeCheckbox)
  expect(toppingsSubtotal).toHaveTextContent('1.50')
})

describe('grand total', () => {
  it('grand total starts at $0.00', () => {
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/ })
    expect(grandTotal).toHaveTextContent('0.00')
  })

  it('grand total updates properly if scoop is added first', async () => {
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/ })

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })

    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, '2')
    expect(grandTotal).toHaveTextContent('4.00')

    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })

    userEvent.click(cherriesCheckbox)
    expect(grandTotal).toHaveTextContent('5.50')
  })

  it('grand total updates properly if topping is added first', async () => {
    render(<OrderEntry />)

    const grandTotal = screen.getByRole('heading', { name: /grand total: \$/ })

    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    })

    userEvent.click(cherriesCheckbox)
    expect(grandTotal).toHaveTextContent('1.50')

    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    })

    userEvent.clear(vanillaInput)
    userEvent.type(vanillaInput, '2')
    expect(grandTotal).toHaveTextContent('5.50')
  })

  it('grand total updates properly if an item is removed', () => {})
})
