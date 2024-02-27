import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles/index.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/favoritos' element={<p>Oi</p>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
