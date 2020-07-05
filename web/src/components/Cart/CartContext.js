import { createContext, useReducer, useContext } from 'react'

import { CartReducer } from './CartReducer'

// localStorage functions
const getStorage = () => JSON.parse(localStorage.getItem('cart'))

// Context Config
export const initialStateStructure = { cartItems: [], syncToken: '' }
const initialState = getStorage() || initialStateStructure
const CartContext = createContext(initialState)

// useCart Hook
export const useCart = () => useContext(CartContext)

// Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  // ACTIONS
  // add item
  const addItem = ({ item }) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { item },
    })
  }
  // update item quantity
  const updateItemQty = ({ id, qty }) => {
    dispatch({
      type: 'UPDATE_ITEM_QTY',
      payload: { id, qty },
    })
  }
  // delete item
  const deleteItem = ({ id }) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: { id },
    })
  }
  // clear cart items
  const clearCartItems = () => {
    dispatch({
      type: 'CLEAR_CART_ITEMS',
    })
  }
  // clear cart
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }
  // log unit amount
  const logItemUnitAmount = ({ id, unitAmount }) => {
    dispatch({
      type: 'LOG_ITEM_UNIT_AMOUNT',
      payload: { id, unitAmount },
    })
  }

  // set invoiceId
  const setInvoiceId = ({ id }) => {
    dispatch({
      type: 'SET_INVOICE_ID',
      payload: { id },
    })
  }

  // Provider Component
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem,
        updateItemQty,
        deleteItem,
        clearCartItems,
        clearCart,
        logItemUnitAmount,
        setInvoiceId,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
