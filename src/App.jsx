import { useState } from "react"
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
import SignIn from "./component.jsx/SignIn"
import Post from "./component.jsx/Post"
import { auth } from "./firebase/config"

function App() {
  console.log("auth", auth.currentUser)
  const [user, setUser] = useState(null)
  return (
    <div>
      <header style={{ backgroundColor: "#f8f9fa", height: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Hommye</h1>
        <nav>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <li>
              <Link to={"/account"}>Account</Link>{" "}
            </li>
            <li>
              <Link to={"/post"}>Post a room</Link>{" "}
            </li>
            <li>
              <Link to={"/"}>Home</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="searchbar" element={<SearchBar />} />
          <Route path="searchresults" element={<SearchResults />} />
          <Route
            path="account"
            element={user ? <Account /> : <SignIn setUser={setUser} />}
          />
          <Route path="post" element={<Post />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
