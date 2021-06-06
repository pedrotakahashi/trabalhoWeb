import React, { createContext, useContext, useState } from 'react';
import t from 'prop-types';
export const Context = createContext();

export default function ContextProvider({ children }) {
    
    const [contexto, setContexto] = useState("Home");
    
    const state = {
        contexto, 
        setContexto, 
        
    }

    return <Context.Provider value={state}>{children}</Context.Provider>;
}

ContextProvider.propTypes = {
    children: t.node.isRequired,
};