import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home.jsx'
import GlobalStyles from './components/GlobalStyles/index.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/index.jsx'
import Favorites from './routes/Favorites.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favoritos' element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
