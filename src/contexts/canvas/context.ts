import { createContext } from 'react';
import { defaultValue } from "./default-value";

type Item = {
    id: number,
    name: string,
};

export type CanvasContextType = {
    items: Item[]
};

export const CanvasContext = createContext<CanvasContextType>(defaultValue);
