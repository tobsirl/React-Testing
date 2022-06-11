import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'

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

  
})


// { name: 'Cherries', imagePath: '/images/cherries.png' },
// { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
// { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },