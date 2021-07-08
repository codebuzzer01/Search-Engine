import React, { createContext, useContext, useReducer } from "react";
//Preparing datalayer
export const StateContext = createContext();
export const StateProvider = ({reducer, inititalState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,
        inititalState)}>
        
        {children}
        </StateContext.Provider>
);
//Hook to pull info from data layer
export const useStateValue = () => useContext(StateContext);