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
import Account from './component.jsx/Account';
import PostRoom from './component.jsx/PostRoom';
import { List, Toolbar, ListItem, ListItemText } from '@mui/material';




function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h3" align="center" style={{ flexGrow: 1 }}>
            Rooms4Rent
          </Typography>
        </Toolbar>
          <nav>
            <List sx={{ display: 'flex', justifyContent: 'center' }}>
              <ListItem button component={Link} to="/account">
                <ListItemText primary="Account" sx={{ color: 'white', textAlign: 'center'}} />
              </ListItem>
              <ListItem button component={Link} to="/postroom">
                <ListItemText primary="Post a room" sx={{ color: 'white', textAlign: 'center'}}/>
              </ListItem>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" sx={{ color: 'white', textAlign: 'center'}}/>
              </ListItem>
                {/* <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-around" }}>
                  <li><Link to={'/account'}>Account</Link> </li>
                  <li><Link to={'/postroom'} >Post a room</Link> </li>
                  <li><Link to={'/'}>Home</Link> </li>
                </ul> */}
            </List>
          </nav>
      </AppBar>
      <Container sx={{ mt: 20 }}>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='searchbar' element={<SearchBar />} />
            <Route path='searchresults' element={<SearchResults />} />
            <Route path='account' element={<Account />} />
            <Route path='postroom' element={<PostRoom />} />
          </Routes>
        </main>
      </Container>
    </div>
  )
}

export default App
