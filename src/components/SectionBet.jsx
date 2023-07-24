import { useContext } from "react"
import { BetsContext } from "../context/bets"

export function SectionBet(){
    const {bets} = useContext(BetsContext)
    
    return(
        <aside className="sec_apuesta">
            {bets && bets.map((bet) => 
            <div key={bet.id}>
                <p>{bet.estado}</p>
                <p>{bet.local}</p>        
                <p>{bet.marcador}</p>
                <p>{bet.visitante}</p>
                <p>GANADOR: {bet.select.ganador}</p>
            </div>   
            )}
            {
                bets.length === 0 ? <p>No hay apuestas</p> :  
                <form action="">
                <label htmlFor="">Monto de Apuesta</label>
                <input type="number" name="" id=""/>
                </form>
            }
           
        </aside>
    )
}

