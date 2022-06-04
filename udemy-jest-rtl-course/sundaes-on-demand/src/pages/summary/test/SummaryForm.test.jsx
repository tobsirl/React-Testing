import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryForm from '../SummaryForm'

it('initial conditions', () => {
  render(<SummaryForm />)

  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  })

  expect(checkbox).not.toBeChecked()

  const confirmBtn = screen.getByRole('button', { name: /confirm order/i })

  expect(confirmBtn).toBeDisabled()
})

it('Checkbox disables button on first click and enables on second click', () => {
  render(<SummaryForm />)

  const checkbox = screen.getByRole('checkbox', {
    name: /i agree to terms and conditions/i,
  })
  const confirmBtn = screen.getByRole('button', { name: /confirm order/i })

  userEvent.click(checkbox)

  expect(confirmBtn).toBeEnabled()

  userEvent.click(checkbox)

  expect(confirmBtn).toBeDisabled()
})
