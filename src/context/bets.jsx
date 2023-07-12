import { createContext, useState } from "react";

export const BetsContext = createContext()

export function BetsProvider({children}){
    const [bets, setBets] = useState(JSON.parse(localStorage.getItem("bets")) ?? [])
    return(
        <BetsContext.Provider value = {{bets, setBets}}>
            {children}
        </BetsContext.Provider>
    )
}