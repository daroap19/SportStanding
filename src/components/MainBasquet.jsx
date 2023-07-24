import { useParams } from "react-router-dom"
import { useGamesBasquet } from "../hooks/useGamesBasquet"

export function MainBasquet(){
    const {idLeague} = useParams()
  const [result] = useGamesBasquet(idLeague)
   return(
    <div className="sec_estadistica ">
    <table className="table_estadistica">
      <thead><tr><th colspan="7" className="table_estadistica_titulo">Partidos</th></tr></thead>
        <tbody>
        {
         result && result.map((res)=>(
          <tr key={res.id}>
            <td>{res.status}</td>
            <td className="table_estadistica_name" ><img className="table_estadistica_logo" src={res.logoh}/></td>
            <td>{res.nameh}</td>
            <td>{res.scoreh}-{res.scorea}</td>
            <td>{res.namea}</td>
            <td className="table_estadistica_name" ><img className="table_estadistica_logo" src={res.logoa}/></td>
          </tr>
         ))
        }
        </tbody>
    </table>
    </div>
) 
}