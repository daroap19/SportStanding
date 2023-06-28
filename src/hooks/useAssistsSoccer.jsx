import { useEffect, useState } from "react"
import { requestOptions, urlSoccer } from "../services/api.js"


export function useAssistsSoccer(idLeague){
    const [result, setResult] = useState(null)
    
    useEffect(()=>{
        fetch(urlSoccer+`players/topassists?league=${idLeague}&season=2022`, requestOptions)
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
                passes_key: res.statistics[0].passes.key,
                passes_total: res.statistics[0].passes.total,
                assists: res.statistics[0].goals.assists
            }))      

            setResult(resultMapeado)
        })
        .catch(error => console.log('error', error));
    }, [idLeague])
   console.log(result)
    return [result]
}