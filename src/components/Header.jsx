import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const LIGAS = {
     "futbol": [
        {"name": "Española", "id": "140"}, {"name": "Italiana", "id": "135"}, {"name": "Inglesa", "id" : "39"}
    ],
     "basquet": [
        {"name": "NBA", "id": "12"}, {"name": "España", "id": "95"}, {"name": "Francia", "id": "2"}
    ],
     "beisbol": [
        {"name": "USA", "id": "1"}, {"name": "Cuba", "id": "9"}, {"name": "Francia", "id": "13"}
    ]
}


export function Header(){
    const [liga, setLiga] = useState("futbol") 

    return(
    <header>
        <nav>
            <ul>
                <li><a className={`${liga == "futbol" ? "active" : ""}`} onClick={()=>{setLiga("futbol")}}>Futbol</a></li>
                <li><a className={`${liga == "basquet"  ? "active" : ""}`} onClick={()=>{setLiga("basquet")}}>Basquet</a></li>
                <li><a className={`${liga == "beisbol" ? "active" : ""}`} onClick={()=>{setLiga("beisbol")}}>Beisbol</a></li>
            </ul> 
            <ul>
                <li>
                    <a href="/live">Home</a>
                </li>
                <li className="partidos" >
                    <a  href="">Partidos</a>
                    <ul className="opciones">
                        {LIGAS[liga] && LIGAS[liga].map((value)=>(
                            <li key={value.id}><Link to={`/partidos/${liga}/${value.name}/${value.id}`}>{value.name}</Link></li>
                        ))
                        }
                    </ul>
                </li>
                <li  className="estadisticas">
                    <a href="">Estadisticas</a>
                    <ul className="opciones">
                        {LIGAS[liga] && LIGAS[liga].map((value)=>(
                            <li key={value.id}><Link to={`/estadisticas/${liga}/${value.name}/${value.id}`}>{value.name}</Link></li>
                        ))
                        }
                    </ul>
                </li>
                <li className="favoritos">
                    <a href="">Favoritos</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul> 
        </nav>
    </header>
    )
}