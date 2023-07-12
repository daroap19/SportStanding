import { useParams } from "react-router-dom";
import { useGamesBaseball } from "../hooks/useGamesBaseball";
import { Matchs } from "../components/Matchs";

export function MatchsBasquet(){
    const {idLeague} = useParams()
    const [result] = useGamesBaseball(idLeague)

    return(
        <section>
            {<Matchs result={result}/>}
        </section>
    )
}