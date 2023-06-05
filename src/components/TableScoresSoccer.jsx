export function TableScoresSoccer({result}) {
    
    return (
      <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Equipo</th>
            <th>Juegos</th>
            <th>Disparos Totales</th>
            <th>Disparos a Puerta</th>
            <th>Goles</th>
          </tr>
        </thead>
        <tbody>
           {
             result && result.map((res)=>(
              <tr key={res.id}>
                <td><img src={res.photo}/> {res.name}</td>
                <td>{res.age}</td>
                <td>{res.team}</td>
                <td>{res.games}</td>
                <td>{res.shots_total}</td>
                <td>{res.shots_on}</td>
                <td>{res.goals}</td>
              </tr>
             ))
          }
        </tbody>
      </table>
      </>
    )
  }
  
  