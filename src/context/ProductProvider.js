import { createContext, useContext, useEffect, useReducer } from "react";
import { actionTypes } from "../state/productState/actionTypes";
import { initialaState, productReducer } from "../state/productState/ProductReducer";

const PRODUCT_CONTEXT = createContext();

//atar maddhome sokol childrenke rapping kore ar vitorer data available kore
export default function ProductProvider({ children }) {

    const [state, dispatch] = useReducer(productReducer, initialaState);

    console.log(state);

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START });
        fetch("products.json")
            .then((res) => res.json())
            .then((data) =>
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
                // (console.log(data))
            ).catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR });
            });

    }, []);
    const value = {
        state, dispatch
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    )

};
//ata akta higher order hook
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
};

