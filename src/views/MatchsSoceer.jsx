import { useParams } from "react-router-dom";
import { useFixturesSoccer } from "../hooks/useFixturesSoccer";
import { Matchs } from "../components/Matchs";

export function MatchsSoccer(){
    const {idLeague} = useParams()
    const [result] = useFixturesSoccer(idLeague)

    return(
        <section>
            {<Matchs result={result}/>}
        </section>
    )
}