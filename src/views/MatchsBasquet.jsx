import { useParams } from "react-router-dom";
import { useGamesBasquet } from "../hooks/useGamesBasquet";
import { Matchs } from "../components/Matchs";

export function MatchsBasquet(){
    const {idLeague} = useParams()
    const [result] = useGamesBasquet(idLeague)

    return(
        <section>
            {<Matchs result={result}/>}
        </section>
    )
}