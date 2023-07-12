export function TableAssistsSoccer({result}) {
    
    return (
      <>
      <table className="table_estadistica">
        <thead>
        <tr><th colSpan="10" className="table_estadistica_titulo">Maximos Asistidores</th></tr>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Equipo</th>
            <th>Juegos</th>
            <th>Pases Totales</th>
            <th>Pases Clave</th>
            <th>Asistencias</th>
          </tr>
        </thead>
        <tbody>
           {
             result && result.map((res)=>(
              <tr key={res.id}>
                <td className="table_estadistica_name"><img className="table_estadistica_logo" src={res.photo}/> {res.name}</td>
                <td>{res.age}</td>
                <td>{res.team}</td>
                <td>{res.games}</td>
                <td>{res.passes_total}</td>
                <td>{res.passes_key}</td>
                <td>{res.assists}</td>
              </tr>
             ))
          }
        </tbody>
      </table>
      </>
    )
  }
  
  