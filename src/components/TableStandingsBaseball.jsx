import { useParams } from "react-router-dom"
import { useStandingBaseball } from "../hooks/useStandingsBaseball.jsx"

export function TableStandingsBaseball(){
  const {idLeague} = useParams()
  const [result] = useStandingBaseball(idLeague)
  
    
    return(
      <>
        {result && result.map((res,index)=>(
          <table  className="table_estadistica" key={index}>
          <thead>
            <tr><th colSpan="10" className="table_estadistica_titulo">Tabla de Posiciones</th></tr>
            <tr>
              <th>POS</th>
              <th>EQUIPO</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PP</th>
              <th>PA</th>
              <th>PE</th>
            </tr>
            {res[0].confe && <tr><th colspan="10" style={{textAlign: "left"}}>{res[0].confe}</th></tr>}
          </thead>
          <tbody>
            {
              res && res.map((date)=>(
                <tr key={date.id}>
                  <td>{date.rank}</td>
                  <td className="table_estadistica_name"><img className="table_estadistica_logo" src={date.logo} /> {date.name}</td>
                  <td>{date.played}</td>
                  <td>{date.win}</td>
                  <td>{date.lose}</td>
                  <td>{date.pa}</td>
                  <td>{date.pe}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
          ))
        }
      </>
    )
}