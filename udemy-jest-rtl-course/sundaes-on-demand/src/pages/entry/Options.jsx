import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import AlertBanner from './../common/AlertBanner'
import { pricePerItem } from '../../constants'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import { useOrderDetails } from '../../contexts/OrderDetails'
import { formatCurrency } from '../../utilities'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const [orderDetails, updateItemCount] = useOrderDetails()

  // optionType is scoops or toppings
  useEffect(() => {
    fetch(`http://localhost:3030/${optionType}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        setError(true)
      })
  }, [optionType])

  if (error) return <AlertBanner />

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ))

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  )
}
