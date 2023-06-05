import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './src/components/Header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TableStandingsBasket } from "./src/components/TableStandingsBasket.jsx"
import { TableStandingsBaseball } from "./src/components/TableStandingsBaseball.jsx"
import { StandingsSoccer } from './src/views/StandingsSoccer.jsx'

import "@tremor/react"
import { TableStandingsSoccer } from './src/components/TableStandingsSoccer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Header></Header>
       <Routes>
            <Route path="/estadisticas/futbol/:name/:idLeague" element={<StandingsSoccer/>} />
            <Route path="/estadisticas/basquet/:name/:idLeague" element={<TableStandingsBasket/>} />
            <Route path="/estadisticas/beisbol/:name/:idLeague" element={<TableStandingsBaseball/>} />
            <Route path="/" element={<h1>inicio</h1>} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
  </BrowserRouter> 
)
