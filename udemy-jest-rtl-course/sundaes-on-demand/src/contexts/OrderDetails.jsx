import { createContext, useContext, useState, useMemo } from 'react'

const OrderDetails = createContext()

// create custom hook to check whether we're inside a provider
function useOrderDetails() {
  const context = useContext(OrderDetails)
}
