import React, {useState} from 'react';
import {CanvasContext, Item} from "./context";

export type CanvasProviderProps = {
    children?: React.ReactNode,
}

export const CanvasProvider = ({ children }: CanvasProviderProps) => {
    const [items, setItems] = useState([]);
    const addItem = (item: Item) => {
        setItems([...items, item]);
        console.log("set items");
    }
    const value = { items, addItem };

    console.log(value);

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    );
}