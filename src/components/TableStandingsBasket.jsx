import { useParams } from "react-router-dom"
import { useStandingBasket } from "../hooks/useStandingsBasket.jsx"

export function TableStandingsBasket(){
  const {idLeague} = useParams()
  const [result] = useStandingBasket(idLeague)
  
    console.log(result)
    return(
      <>
        {result && result.map((res,index)=>(
          <table key={index}>
          <thead>
            <tr>
              <th>POS</th>
              <th>EQUIPO</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PP</th>
              <th>PA</th>
              <th>PE</th>
            </tr>
            {res[0].confe && <tr>{res[0].confe}</tr>}
          </thead>
          <tbody>
            {
              res && res.map((date)=>(
                <tr key={date.id}>
                  <td>{date.rank}</td>
                  <td><img src={date.logo} /> {date.name}</td>
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