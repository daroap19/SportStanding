import { useEffect, useState } from "react"
import { requestOptions, urlSoccer } from "../services/api" 



export function useStandingsSoccer(idLeague){
    const [result, setResult] = useState(null)
    useEffect(()=>{
        fetch(urlSoccer+`standings?league=${idLeague}&season=2022`, requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const resultnoMapeado =  response.response[0].league.standings[0]
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.team.id,
                logo: res.team.logo,
                rank: res.rank,
                name: res.team.name,
                points: res.points,
                played: res.all.played,
                win: res.all.win,
                lose: res.all.lose,
                draw: res.all.draw,
                ga: res.all.goals.for,
                ge: res.all.goals.against,
                gd: res.all.goals.for - res.all.goals.against
            }))      

            setResult(resultMapeado)
        })
        .catch(error => console.log('error', error));
    }, [idLeague])

    return [result]
}