import * as React from "react"

const CartContext = React.createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([])

  const addItem = React.useCallback((seedling, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === seedling.id)
      if (existing) {
        return prev.map((i) =>
          i.id === seedling.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...seedling, qty }]
    })
  }, [])

  const removeItem = React.useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = React.useCallback((id, qty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    )
  }, [])

  const clear = React.useCallback(() => setItems([]), [])

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  const value = { items, addItem, removeItem, updateQty, clear, count, total }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
