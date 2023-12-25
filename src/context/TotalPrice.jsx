import { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const TotalPriceContext = createContext()

const TotalPriceDispatchContext = createContext()

function totalPriceReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        total: action.payload.total
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export default function TotalPriceProvider({ children }) {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 })
  return (
    <TotalPriceContext.Provider value={totalPrice}>
      <TotalPriceDispatchContext.Provider value={dispatch}>
        {children}
      </TotalPriceDispatchContext.Provider>
    </TotalPriceContext.Provider>
  )
}

TotalPriceProvider.propTypes = {
  children: PropTypes.node
}

export function useTotalPrice() {
  return useContext(TotalPriceContext)
}

export function useTotalPriceDispatch() {
  return useContext(TotalPriceDispatchContext)
}
