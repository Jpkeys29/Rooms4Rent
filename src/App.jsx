import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import Home from './component.jsx/Home';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import MyMap from './component.jsx/SearchBar';
import Typography from '@mui/material/Typography';



function App() {
  return (
    <Box>
      <AppBar>
        <Typography>
          <Home />
        </Typography>
      </AppBar>
      <Box>
        <Container>
          <MyMap />
        </Container>

      </Box>
    </Box>
  )

}

export default App
