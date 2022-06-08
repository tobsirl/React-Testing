import { createContext, useContext, useState, useMemo } from 'react'

const OrderDetails = createContext()

// create custom hook to check whether we're inside a provider
function useOrderDetails() {
  const context = useContext(OrderDetails)

  if (!context) {
    throw new Error(
      'useOrderDetails must be used within an OrderDetailsProvider',
    )
  }

  return context
}

function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  })

  // getter: object containing option counts for scoops and toppings, subtotal and totals
  // setter: updateOptionCount
  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts }

      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType]
      optionCountsMap.set(itemName, parseInt(newItemCount))

      setOptionCounts(newOptionCounts)
    }

    return [{ ...optionCounts }, updateItemCount]
  }, [])
  return <OrderDetails.Provider value={value} {...props} />
}
