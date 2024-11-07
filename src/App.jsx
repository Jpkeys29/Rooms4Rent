import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Link, useParams } from "react-router-dom"
import Home from "./component.jsx/Home"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import SearchBar from "./component.jsx/SearchBar"
import SearchResults from "./component.jsx/SearchResults"
import Account from "./component.jsx/Account"
import Post from "./component.jsx/Post"
import { auth } from "./firebase/config"
import SignIn from "./component.jsx/SignIn"
import SignUp from "./component.jsx/SignUp"
import { onAuthStateChanged, signOut } from "firebase/auth"
import PostRoom from "./component.jsx/PostRoom"
import { Toolbar } from "@mui/material"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import SvgIcon from '@mui/material/SvgIcon';
import Button from "@mui/material/Button";


function App() {
  console.log("auth", auth.currentUser)
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const handleLogOut = async () => {
    await signOut(auth)
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="static" sx={{ backgroundColor: 'transparent' }} >
          <Toolbar >
            <Typography variant="h4" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#141414' }} >
              Roomye
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }} >
              <Link to={"/"} style={{ color:"#212529", textDecoration:"none"}} >Home</Link>{" "}
              <Link to={"/post"} style={{ color:"#212529", textDecoration:"none"}}>Post a room</Link>{" "}
              <Link to={"/account"} style={{ color:"#212529", textDecoration:"none"}}>Account</Link>{" "}
              <Link onClick={handleLogOut} to={'/'} style={{ color:"#212529", textDecoration:"none"}}>Log Out</Link>{" "}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="searchbar" element={<SearchBar />} />
          <Route path="searchresults" element={<SearchResults />} />
          <Route path="signup" element={<SignUp />} />
          <Route
            path="account"
            element={
              user ? (
                <Account />
              ) : (
                <>
                  <SignIn setUser={setUser} />
                  {/* <SignUp setUser={setUser}/> */}
                </>
              )
            }
          />
          <Route
            path="post"
            element={user ?
              <PostRoom /> :
              <><SignIn />
                {/* <SignUp /> */}
              </>
            } />
        </Routes>
      </main>
    </div>
  )
}

export default App
