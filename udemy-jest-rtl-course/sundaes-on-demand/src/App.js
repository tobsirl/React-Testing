import { useState } from 'react'
import { Container } from 'react-bootstrap'

import OrderEntry from './pages/entry/OrderEntry'
import OrderConfirmation from './pages/confirmation/OrderConfirmation'
import OrderSummary from './pages/summary/OrderSummary'

import { OrderDetailProvider } from './contexts/OrderDetails'

function App() {
  const [orderPhase, setOrderPhase] = useState('inProgress')

  let Component = OrderEntry // default to order page
  switch (orderPhase) {
    case 'inProgress':
      Component = OrderEntry
      break
    case 'review':
      Component = OrderSummary
      break
    case 'completed':
      Component = OrderConfirmation
      break
    default:
  }

  return (
    <OrderDetailProvider>
      <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
    </OrderDetailProvider>
  )
}

export default App
