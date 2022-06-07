import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../Options'

it('update scoop subtotal when scoops change', () => {
  render(<Options optionType="scoops" />)

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('scoops total: $', { exact: false })
  expect(scoopsSubtotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1 and check the subtotal

  // update chocolate scoops to 2 and check subtotal
})
