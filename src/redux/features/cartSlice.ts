import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define CartItem type
interface CartItem {
    _id: string;
    name: string;
    price: number;
    quantity: number; // Ensure quantity is always defined
    available_quantity: number;
    subPrice: number;
}

// Define the state type for the cart
interface CartState {
    items: CartItem[];
}

// Initial state
const initialState: CartState = {
    items: [],
};

// Define the payload type for updating product quantity
interface UpdateProductQuantityPayload {
    id: string;
    quantity: number;
}

// Create the slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(item => item._id === action.payload._id);

            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.subPrice = existingItem.price * existingItem.quantity;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1, // Default quantity to 1
                    subPrice: action.payload.price, // Set subPrice as the price initially
                });
            }
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item._id === action.payload);
            if (item && item.quantity < item.available_quantity) {
                item.quantity += 1;
                item.subPrice = parseFloat((item.price * item.quantity).toFixed(2)); // Safely calculate subPrice
            }
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item._id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.subPrice = parseFloat((item.price * item.quantity).toFixed(2)); // Safely calculate subPrice
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        updateProductQuantity(state, action: PayloadAction<UpdateProductQuantityPayload>) {
            const { id, quantity } = action.payload;
            const product = state.items.find(item => item._id === id);
            if (product) {
                // Decrease available quantity safely
                product.available_quantity = Math.max(product.available_quantity - quantity, 0);
            }
        },
    },
});

// Export actions and reducer
export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
