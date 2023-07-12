import { useEffect, useState } from "react"
import { requestOptions, urlBasket } from "../services/api" 


export function useGamesBasquet(idLeague){
    const [result, setResult] = useState(null)
    useEffect(()=>{
        fetch(urlBasket+`games?league=${idLeague}&season=2022-2023`, requestOptions)
        .then(response => response.json())
        .then(response => {
            const resultnoMapeado =  response.response
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.id,
                status: res.status.short,
                logoh: res.teams.home.logo,
                nameh: res.teams.home.name,
                scoreh: res.scores.home.total,
                scorea: res.scores.away.total,
                logoa: res.teams.away.logo,
                namea: res.teams.away.name,
            }))      

            setResult(resultMapeado)
        })
        .catch(error => console.log('error', error));
    }, [idLeague])

    return [result]
}