import { useParams } from "react-router-dom"
import { useFixturesSoccer } from "../hooks/useFixturesSoccer"

export function MainVivo(){
    const {idLeague} = useParams()
  const [result] = useFixturesSoccer(idLeague)
   return(
    <>
    <table>
        <tbody>
        {
         result && result.map((res)=>(
          <tr key={res.id}>
            <td>{res.status}</td>
            <td><img src={res.logoh}/></td>
            <td>{res.nameh}</td>
            <td>{res.scoreh}-{res.scorea}</td>
            <td><img src={res.logoa}/></td>
            <td>{res.namea}</td>
            <td>{res.time}</td>
          </tr>
         ))
        }
        </tbody>
    </table>
    </>
) 
}
