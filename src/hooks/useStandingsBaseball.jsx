import { useEffect, useState } from "react"
import { requestOptions, urlBaseball } from "../services/api" 


export function useStandingBaseball(idLeague){
    const [result, setResult] = useState(null)
    console.log(idLeague)
    useEffect(()=>{
        fetch(urlBaseball+`standings?league=${idLeague}&season=2023`, requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const resultnoMapeado =  response.response[0]
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.team.id,
                rank: res.position,
                logo: res.team.logo,
                name: res.team.name,
                played: res.games.played,
                win: res.games.win.total,
                lose: res.games.lose.total,
                pa: res.points.for,
                pe: res.points.against,
                confe: res.group.name
            }))      
            
            if(idLeague === "1"){
                const res = [resultMapeado.filter(cee=>cee.confe == "American League"),
                resultMapeado.filter(cee=>cee.confe == "National League"),resultMapeado.filter(cee=>cee.confe == "AL East"),
                resultMapeado.filter(cee=>cee.confe == "AL Central"),resultMapeado.filter(cee=>cee.confe == "AL West"),
                resultMapeado.filter(cee=>cee.confe == "NL East"),resultMapeado.filter(cee=>cee.confe == "NL Central"),
                 resultMapeado.filter(cee=>cee.confe == "NL West")
                ]
                setResult(res)
            }else{
                setResult([resultMapeado])
            }
          

         
        })
        .catch(error => console.log('error', error));
    }, [idLeague])

    console.log(result)
    return [result]
}