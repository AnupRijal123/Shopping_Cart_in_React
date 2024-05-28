import { useContext, createContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext({
    getItemQuantity: () => { },
    increaseCartQuantity: () => { },
    decreaseCartQuantity: () => { },
    removeFromCart: () => { },
    openCart: () => { },
    closeCart: () => { },
    cartQuantity: 0,
    cartItems: []
});

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage('shopping-cart', []);
    const cartQuantity = cartItems.reduce((quantity, item) =>
        item.quantity + quantity, 0
    );
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () => {
        setIsOpen(true);
    };
    const closeCart = () => {
        setIsOpen(false);
    }

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id) {
        setCartItems(currentItems => {
            const itemIndex = currentItems.findIndex(item => item.id === id);
            if (itemIndex === -1) {
                return [...currentItems, { id, quantity: 1 }];
            } else {
                return currentItems.map((item, index) => {
                    if (index === itemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id) {
        setCartItems(currentItems => {
            const itemIndex = currentItems.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                if (currentItems[itemIndex].quantity === 1) {
                    return currentItems.filter(item => item.id !== id);
                } else {
                    return currentItems.map((item, index) => {
                        if (index === itemIndex) {
                            return { ...item, quantity: item.quantity - 1 };
                        } else {
                            return item;
                        }
                    });
                }
            }
            return currentItems;
        });
    }

    function removeFromCart(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity,
                openCart,
                closeCart,
                isOpen

            }}
        >
            {children}
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    );
}
