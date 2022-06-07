import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../Options'

it('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />)

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('scoops total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: /vanilla/i,
  })

  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')
  expect(scoopsSubtotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check subtotal
  const cocolateInput = await screen.findByRole('spinbutton', {
    name: /chocolate/i,
  })

  userEvent.clear(cocolateInput)
  userEvent.type(cocolateInput, '2')
  expect(scoopsSubtotal).toHaveTextContent()
})
