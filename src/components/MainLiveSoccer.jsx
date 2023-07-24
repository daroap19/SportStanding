export function MainLiveSoccer({result}){
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
            <td className="table_goals"><span>{res.scoreh}</span>-<span>{res.scorea}</span></td>
            <td>{res.namea}</td>
            <td className="table_estadistica_name" ><img className="table_estadistica_logo" src={res.logoa}/></td>
            <td>{res.time}</td>
          </tr>
         ))
        }
        </tbody>
    </table>
    </div>
) 
}
