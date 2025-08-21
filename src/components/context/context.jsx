import { createContext, useState } from "react"

export const context = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (products) => {
        setCartItems(prev => [...prev, products])
    }

    const removeCart = (product) => {
        setCartItems(prev => prev.filter(item => item !== product))
    }
    return (
        <context.Provider value={{ cartItems, addToCart, removeCart }}>
            {children}
        </context.Provider>
    )
}