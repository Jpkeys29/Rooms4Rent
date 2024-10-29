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
      <header style={{ backgroundColor: "#f8f9fa", height: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Rommye</h1>
        <nav>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <li>
              <Link to={"/post"}>Post a room</Link>{" "}
            </li>
            <li>
              <Link to={"/account"}>Account</Link>{" "}
            </li>
            <li>
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              <Link onClick={handleLogOut} to={'/'}>Log Out</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
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
                  <SignIn setUser={setUser}/>
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
