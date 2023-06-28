import { useEffect, useState } from "react"
import { requestOptions, urlSoccer } from "../services/api" 



export function useFixturesSoccerLive(idLeague){
    const [result, setResult] = useState(null)
    useEffect(()=>{
        fetch(urlSoccer+`fixtures?live=all`, requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            const resultnoMapeado =  response.response
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.fixture.id,
                status: res.fixture.status.short,
                logoh: res.teams.home.logo,
                nameh: res.teams.home.name,
                scoreh: res.score.fulltime.home,
                scorea: res.score.fulltime.away,
                logoa: res.teams.away.logo,
                namea: res.teams.away.name,
                time: res.fixture.status.elapsed,
            }))      

            setResult(resultMapeado)
        })
        .catch(error => console.log('error', error));
    }, [idLeague])

    console.log(result)
    return [result]
}