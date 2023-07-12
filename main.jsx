import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './src/components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StandingsBaseball } from './src/views/StandingsBaseball.jsx'
import { StandingsSoccer } from './src/views/StandingsSoccer.jsx'
import { StandingsBasquet } from './src/views/StandingsBasquet.jsx'
import { Live } from './src/views/Live.jsx'
import { MatchsSoccer } from './src/views/MatchsSoceer.jsx'
import { BetsProvider } from './src/context/bets.jsx'
import { SectionBet } from './src/components/SectionBet.jsx' 
import { MatchsBasquet } from './src/views/MatchsBasquet.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BetsProvider>
      <Header/>
      <div className='section_principal'>
        <Routes>
              <Route path='/partidos/futbol/:name/:idLeague' element={<MatchsSoccer/>} />
              <Route path='/partidos/basquet/:name/:idLeague' element={<MatchsBasquet/>} />
              <Route path='/partidos/beisbol/:name/:idLeague' element={<MatchsSoccer/>} />
              <Route path="/estadisticas/futbol/:name/:idLeague" element={<StandingsSoccer/>} />
              <Route path="/estadisticas/basquet/:name/:idLeague" element={<StandingsBasquet/>} />
              <Route path="/estadisticas/beisbol/:name/:idLeague" element={<StandingsBaseball/>} />
              <Route path="/" element={<Live/>} />
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <SectionBet/>
      </div>
    </BetsProvider>  
  </BrowserRouter> 
)
