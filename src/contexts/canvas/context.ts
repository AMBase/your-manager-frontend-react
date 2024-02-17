import { createContext } from 'react';
import { defaultValue } from "./default-value";

export type Item = {
    id: number,
    name: string,
};

export type CanvasContextType = {
    items: Item[],
    addItem: (item: Item) => void,
};

export const CanvasContext = createContext<CanvasContextType>(defaultValue);
