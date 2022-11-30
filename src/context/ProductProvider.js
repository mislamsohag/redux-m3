import { createContext, useContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext();

//atar maddhome sokol childrenke rapping kore ar vitorer data available kore
export default function ProductProvider({ children }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const value = {
        data,
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
}

