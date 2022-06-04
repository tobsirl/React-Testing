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

it('popover responds to hover', () => {
  render(<SummaryForm />)
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i,
  )
  expect(nullPopover).not.toBeInTheDocument()

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)

  const popover = screen.getByText(/no ice cream will actually be delivered/i)

  expect(popover).toBeInTheDocument()

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  const nullPopoverAgain = screen.queryByText(
    /no ice cream will actually be delivered/i,
  )
  expect(nullPopoverAgain).not.toBeInTheDocument()
})
