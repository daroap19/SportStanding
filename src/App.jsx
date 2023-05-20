import { useEffect, useState } from "react"


const requestOptions = {
  method: 'GET',
  headers: {
    "x-rapidapi-key": "9084ce6eb502811b653b3d6e1e902035",
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
  redirect: 'follow'
};

const url = "https://v3.football.api-sports.io/"


export function App({idLeague}) {
  const [result, setResult] = useState(null)

  useEffect(()=>{
      fetch(url+`standings?league=${idLeague}&season=2022`, requestOptions)
      .then(response => response.json())
      .then(result => setResult(result.response[0].league.standings[0]))
      .catch(error => console.log('error', error));
  }, [])


  return (
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
            <tr key={res.team.id}>
              <td>{res.rank}</td>
              <td>{res.team.name}</td>
              <td>{res.points}</td>
              <td>{res.all.played}</td>
              <td>{res.all.win}</td>
              <td>{res.all.lose}</td>
              <td>{res.all.draw}</td>
              <td>{res.all.goals.for}</td>
              <td>{res.all.goals.against}</td>
              <td>{res.all.goals.for - res.all.goals.against}</td>
            </tr>
           ))
        }
      </tbody>
    </table>
  )
}

