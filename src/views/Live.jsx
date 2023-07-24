import { Matchs } from "../components/Matchs";
import { useFixturesSoccerLive } from "../hooks/useFixturesSoccerLive";

export function Live(){
    const [result]= useFixturesSoccerLive()

    return(
        <section className="sec_estadistica ">
            {result && <Matchs result={result}/>}
        </section>
    )
}