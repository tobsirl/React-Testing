import { useState, useEffect } from 'react'
import ScoopOption from './ScoopOption'
import { Row } from 'react-bootstrap'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  // optionType is scoops or toppings
  useEffect(() => {
    fetch(`http://localhost:3030/${optionType}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        // TODO: handle error response
      })
  }, [optionType])

  console.log('items :>> ', items)

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return <Row>{optionItems}</Row>
}
