import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './src/components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StandingsBaseball } from './src/views/StandingsBaseball.jsx'
import { StandingsSoccer } from './src/views/StandingsSoccer.jsx'
import { MainSoccer} from './src/components/MainSoccer.jsx'
import { StandingsBasquet } from './src/views/StandingsBasquet.jsx'
import { Live } from './src/views/live.jsx'
import { MainBasquet } from './src/components/MainBasquet.jsx'
import { MainBaseball } from './src/components/MainBaseball.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Header></Header>
       <Routes>

            <Route path='/partidos/futbol/:name/:idLeague' element={<MainSoccer/>} />
            <Route path='/partidos/basquet/:name/:idLeague' element={<MainBasquet/>} />
            <Route path='/partidos/beisbol/:name/:idLeague' element={<MainBaseball/>} />
            <Route path="/estadisticas/futbol/:name/:idLeague" element={<StandingsSoccer/>} />
            <Route path="/estadisticas/basquet/:name/:idLeague" element={<StandingsBasquet/>} />
            <Route path="/estadisticas/beisbol/:name/:idLeague" element={<StandingsBaseball/>} />
            <Route path="/" element={<Live/>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
  </BrowserRouter> 
)
