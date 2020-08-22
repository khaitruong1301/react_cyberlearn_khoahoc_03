import React, { useReducer } from 'react'


export const context = React.createContext();

let initialCart = [];
let cartReducer = (state, action) => {
    console.log('action',action)
    switch (action.type) {
        case 'addToCart': {
            let index = state.findIndex(item => item.id === action.product.id);
            if (index != -1) {
                state[index].quantity += 1;
                return [...state];
            }
            return [...state, { ...action.product, quantity: 1 }]
        };
        default: return state;
    }
}

export default function ContextProvider(props) {
     let [cart,dispatch] = useReducer(cartReducer,initialCart);
    //Dùng context bao bọc tất cả component bên trong (cụ thể là App)

    //store giống như rootReducer
    const store = {
        cartReducer: [cart,dispatch],
        //
    }

    return (
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
