import { useOrderDetails } from '../../contexts/OrderDetails'
import Options from './Options'
import { Button } from 'react-bootstrap'

export default function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails()
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order Sundae!</Button>
    </div>
  )
}
