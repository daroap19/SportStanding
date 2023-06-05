import { useEffect, useState } from "react"
import { requestOptions, urlSoccer } from "../services/api.js"


export function useScorersSoccer(idLeague){
    const [result, setResult] = useState(null)
    
    useEffect(()=>{
        fetch(urlSoccer+`players/topscorers?league=${idLeague}&season=2022`, requestOptions)
        .then(response => response.json())
        .then(response => {
            
            const resultnoMapeado =  response.response
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.player.id,
                photo: res.player.photo,
                name: res.player.name,
                age: res.player.age,
                team:  res.statistics[0].team.name,
                games: res.statistics[0].games.appearences,
                shots_on: res.statistics[0].shots.on,
                shots_total: res.statistics[0].shots.total,
                goals: res.statistics[0].goals.total
            }))      

            setResult(resultMapeado)
        })
        .catch(error => console.log('error', error));
    }, [idLeague])
   
    return [result]
}