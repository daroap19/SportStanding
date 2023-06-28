import { useEffect, useState } from "react"
import { requestOptions, urlBasket } from "../services/api" 


export function useStandingBasket(idLeague){
    const [result, setResult] = useState(null)

    useEffect(()=>{
        fetch(urlBasket+`standings?league=${idLeague}&season=2022-2023`, requestOptions)
        .then(response => response.json())
        .then(response => {
            const resultnoMapeado =  response.response[0]
            const resultMapeado = resultnoMapeado.map((res)=>({
                id: res.team.id,
                rank: res.position,
                logo: res.team.logo,
                name: res.team.name,
                played: res.games.played,
                win: res.games.win.total,
                win_percentage: res.games.win.percentage,
                lose: res.games.lose.total,
                lose_percentage: res.games.lose.percentage,
                pa: res.points.for,
                pe: res.points.against,
                confe: res.group.name
            }))      
            
            if(idLeague === "12"){
                const res = [resultMapeado.filter(cee=>cee.confe == "Western Conference"),
                resultMapeado.filter(cee=>cee.confe == "Eastern Conference"),resultMapeado.filter(cee=>cee.confe == "Atlantic"),
                resultMapeado.filter(cee=>cee.confe == "Southeast"),resultMapeado.filter(cee=>cee.confe == "Central"),
                resultMapeado.filter(cee=>cee.confe == "Northwest"),resultMapeado.filter(cee=>cee.confe == "Pacific"),
                 resultMapeado.filter(cee=>cee.confe == "Northwest"),resultMapeado.filter(cee=>cee.confe == "Southwest")
                ]
                setResult(res)
            }else{
                setResult([resultMapeado])
            }
          

         
        })
        .catch(error => console.log('error', error));
    }, [idLeague])
   
    return [result]
}