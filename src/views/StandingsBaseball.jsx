import { useParams } from "react-router-dom"
import { TableStandingsBaseball } from "../components/TableStandingsBaseball.jsx"
import { useStandingBaseball } from "../hooks/useStandingsBaseball.jsx"
import { DonutStandings } from "../components/DonutStandings"
import { ScatterStandings } from "../components/ScatterStandings"

export function StandingsBaseball(){
    const {idLeague} = useParams()
    const [result] = useStandingBaseball(idLeague)

    const winPercentage = result && structuredClone(result).flat()
    
    const hash = {}
   const data = result && winPercentage.filter(o => hash[o.id] ? false : hash[o.id] = true)
   .map(res=>{return {name: res.name, win_percentage: Math.round(res.win_percentage*100),
     lose_percentage: Math.round(res.lose_percentage*100), pa: res.pa, win: res.win, pe: res.pe}})
   .sort((a,b)=> {const orden = a.win < b.win ? 1 : -1; return orden})

   
    return(
        <section className="sec_estadistica">
            {result && <TableStandingsBaseball result={result}/>}
            {result && <DonutStandings data={data} title={"Promedio de victoria"} 
            index={"name"} categories={"win_percentage"} colors={"#82ca9d"}/>}
            {result && <DonutStandings data={data} title={"Promedio de Derrota"} 
            index={"name"} categories={"lose_percentage"} colors={"#82ca9d"}/>}
            {result && <ScatterStandings data={data} index={"win"} 
            categories={{pa: "pa", pe: "pe"}} color={{uno: "#007bff", dos: "#c2084f"}} 
            title={"Puntos Anotados - Encajados VS Partidos Ganados"}/>}
        </section>
    );
}