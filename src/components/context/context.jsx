import { createContext, useState } from "react"

export const context = createContext();


export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (products) => {
        setCartItems(prev => [...prev, products])
    }

    return (
        <context.Provider value={{ cartItems, addToCart}}>
            {children}
        </context.Provider>
    )
}
