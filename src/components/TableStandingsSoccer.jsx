
export function TableStandingsSoccer({result}) {

  return (
    <>
    <table className="table_estadistica">
      <thead>
        <tr><th colSpan="10" className="table_estadistica_titulo">Tabla de Posiciones</th></tr>
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
              <td className="table_estadistica_name" ><img className="table_estadistica_logo" src={res.logo}/> <span>{res.name}</span></td>
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

