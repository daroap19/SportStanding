import { MainLiveSoccer } from "../components/MainLiveSoccer";
import { useFixturesSoccerLive } from "../hooks/useFixturesSoccerLive";

export function Live(){
    const [result]= useFixturesSoccerLive()

    return(
        <section className="sec_estadistica ">
            {result && <MainLiveSoccer result={result}/>}
        </section>
    )
}