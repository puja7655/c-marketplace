'use client';

import { Project } from "@/data/projects";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
        project: Project;
        volume: number
}

interface ContextProps {
    cartData: DataType[],
    setCartData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    cartData: [],
    setCartData: (): DataType[] => [] 
})

export const GlobalContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState<[] | DataType[]>([]);
    
    return (
        <GlobalContext.Provider value={{ cartData, setCartData }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);