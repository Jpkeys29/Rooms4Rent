import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import Home from './component.jsx/Home';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SearchBar from './component.jsx/SearchBar';
import SearchResults from './component.jsx/SearchResults';



function App() {
  return (
    <div>
      <header style={{backgroundColor:"#f8f9fa", height:"100px"}}>
      <h1 style={{textAlign:"center"}}>Hommye</h1>
        <nav>
          <ul style={{listStyleType:"none", display:"flex", justifyContent:"space-around"}}>
            <li>Account</li>
            <li>Post ad</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='searchbar' element={<SearchBar />} />
          <Route path='searchresults' element={<SearchResults/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
