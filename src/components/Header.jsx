import { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

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
        <ul>
            <li><a  onClick={()=>{setLiga("futbol")}}>Futbol</a></li>
            <li><a onClick={()=>{setLiga("basquet")}}>Basquet</a></li>
            <li><a onClick={()=>{setLiga("beisbol")}}>Beisbol</a></li>
        </ul> 
        <ul>
            <li className="partidos" >
                <a  href="">Partidos</a>
                <ul className="opciones">
                    {LIGAS[liga] && LIGAS[liga].map((value)=>(
                        <li key={value.id}><Link to={`/estadisticas/${liga}/${value.name}/${value.id}`}>{value.name}</Link></li>
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
            <li>
                <a href="">Favoritos</a>
            </li>
        </ul>

       
    </header>
    )
}