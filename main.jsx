import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './src/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App idLeague={"140"}/>
    <App idLeague={"39"}/>
    <App idLeague={"137"}/>
  </React.StrictMode>,
)
