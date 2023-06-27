import { BarStandings } from "../components/BarStandings.jsx"
import { TableStandingsSoccer } from "../components/TableStandingsSoccer.jsx"
import { TableScoresSoccer } from "../components/tableScoresSoccer.jsx"
import { TableAssistsSoccer } from "../components/TableAssistsSoccer.jsx"
import { useStandingsSoccer } from "../hooks/useStandingsSoccer"
import {useScorersSoccer} from "../hooks/useScorersSoccer.jsx"
import { useAssistsSoccer} from "../hooks/useAssistsSoccer.jsx"
import { useParams } from "react-router-dom"

export function StandingsSoccer(){
    const {idLeague} = useParams()
    const [result] = useStandingsSoccer(idLeague)
    const [topScores] = useScorersSoccer(idLeague)
    const {topAssists} = useAssistsSoccer(idLeague)
  
    const golesFavor = result && result.map(res => {return {name: res.name, Goles_Favor: res.ga, Goles_Contra: res.ge}}).sort((a,b)=> {const orden = a.Goles_Favor < b.Goles_Favor ? 1 : -1; return orden}).slice(0,6)
  
    const golesContra = result && result.map(res => {return {name: res.name, Goles_Contra: res.ge}}).sort((a,b)=> {const orden = a.Goles_Contra < b.Goles_Contra ? 1 : -1; return orden} ).slice(0,6)

    return(
        <>
            {result && <TableStandingsSoccer result={result}/>}
            {topScores && <TableScoresSoccer result={topScores}/>}
            {topAssists && <TableAssistsSoccer result={topAssists}/>}
            {result && <BarStandings title={"Equipos con mas goles anotados"} data={golesFavor} color={"cyan"} index={"name"} categories={"Goles_Favor"}/>}
            {result && <BarStandings title={"Equipos con mas goles encajados"} data={golesContra} color={"red"} index={"name"} categories={"Goles_Contra"}/>}
            
        </>
    )
}