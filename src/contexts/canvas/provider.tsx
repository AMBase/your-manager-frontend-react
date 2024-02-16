import React from 'react';
import {CanvasContext} from "./context";

export type CanvasProviderProps = {
    children?: React.ReactNode,
}

export const CanvasProvider: React.FC<CanvasProviderProps> = ({ children }) => {


    return (
        <CanvasContext.Provider value={null}>
            {children}
        </CanvasContext.Provider>
    );
}