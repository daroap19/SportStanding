import { useParams } from "react-router-dom"
import { useStandingsSoccer } from "../hooks/useStandingsSoccer"

export function TableStandingsSoccer() {
  const {idLeague} = useParams()
  const [result] = useStandingsSoccer(idLeague)
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>POS</th>
          <th>EQUIPO</th>
          <th>PT</th>
          <th>PJ</th>
          <th>PG</th>
          <th>PP</th>
          <th>PE</th>
          <th>GA</th>
          <th>GE</th>
          <th>GDF</th>
        </tr>
      </thead>
      <tbody>
         {
           result && result.map((res)=>(
            <tr key={res.id}>
              <td>{res.rank}</td>
              <td><img src={res.logo}/> {res.name}</td>
              <td>{res.points}</td>
              <td>{res.played}</td>
              <td>{res.win}</td>
              <td>{res.lose}</td>
              <td>{res.draw}</td>
              <td>{res.ga}</td>
              <td>{res.ge}</td>
              <td>{res.gd}</td>
            </tr>
           ))
        }
      </tbody>
    </table>
    </>
  )
}

