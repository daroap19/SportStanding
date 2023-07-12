import { useSelect } from "../hooks/useSelect"
import { useContext} from "react"
import { BetsContext } from "../context/bets"


export function Matchs({result}){
   const {bets, setBets} = useContext(BetsContext)

  function handleCLick(event){
    event.preventDefault()
    const [newBet, target] = useSelect(event)  
    

    if((bets.some(bet => bet.id === newBet.id)) && 
    (Array.from(target.classList).every(clas => clas != "selected"))){
      const [remove] = Array.from(target.parentElement.children).filter((ta)=>{ return Array.from(ta.classList).some(clas => clas === "selected")})
      const Bets = bets.filter(bet => bet.id !== newBet.id)
      remove.classList.remove("selected")
      target.classList.add("selected")
      setBets([...Bets, newBet])
      localStorage.setItem("bets",JSON.stringify([...Bets, newBet]))
      return
    }

    if(bets.some(bet => bet.id === newBet.id)){
      const newBets = bets.filter(bet => bet.id !== newBet.id)
      target.classList.remove("selected")
      setBets(newBets)
      localStorage.setItem("bets",JSON.stringify(newBets))
      return
    }
    
  
    target.classList.add("selected")
    setBets([...bets, newBet])
    localStorage.setItem("bets",JSON.stringify([...bets, newBet]))
  }


   return(  
    <div className="sec_estadistica ">
    <table className="table_partidos">
      <thead><tr><th colSpan="7" className="table_estadistica_titulo">Partidos</th></tr></thead>
        <tbody>
        {
         result && result.map((res)=>(
          <tr key={res.id} id={res.id}>
              <td>{res.status}</td>
              {bets.some(bet => bet.id == res.id && bet.select.ganador == res.nameh) ? 
               <td onClick={(e) => handleCLick(e)} className={`equipo_local selected`}>
                 <img className="table_estadistica_logo" src={res.logoh}/>
                 <p>{res.nameh}</p>
               </td> : 
              <td onClick={(e) => handleCLick(e)} className={`equipo_local`}>
                 <p>{Math.ceil(1+Math.random()*5)}</p>
                 <img className="table_estadistica_logo" src={res.logoh}/>
                 <p>{res.nameh}</p>
               </td>
              }
              <td>
                <p>{res.scoreh}-{res.scorea}</p>
                <p className="time_partido">{res.time ?? "0"}</p>
              </td>
             {bets.some(bet => bet.id == res.id && bet.select.ganador == res.namea) ? 
              <td onClick={(e) => handleCLick(e)} className={`equipo_visitante selected`}>
                <img className="table_estadistica_logo" src={res.logoa}/>
                <p>{res.namea}</p>
              </td> : 
               <td onClick={(e) => handleCLick(e)} className={`equipo_visitante`}>
                <img className="table_estadistica_logo" src={res.logoa}/>
                <p>{res.namea}</p>
              </td>
              }
          </tr>
         ))
        }
        </tbody>
    </table>
    </div>
) 
}
