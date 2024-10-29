import React from "react"
import { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CardActions from "@mui/material/CardActions"
import Grid from "@mui/material/Grid2"
import Post from "./Post"
import { useSearchParams } from "react-router-dom"

const SearchResults = () => {
  const [posting, setPosting] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const area_short_name = searchParams.get("area_short_name") // e.g., ?myParam=value
  const area_long_name = searchParams.get("area_long_name") // e.g., ?myParam=value
  console.log(area_long_name, area_short_name)
  
  useEffect(() => {
    const fetchPosting = async () => {
      try {
        const response = await fetch("/dataPostings.json")
        if (!response.ok) {
          throw new Error("Response was not ok")
        }
        const jsonData = await response.json()
        // console.log(jsonData)
        // filter data based on search query parameters
        console.log("Short name:", area_short_name)
        console.log("Long name:", area_long_name)
        let jsonDataFiltered = jsonData.filter(
          (item) =>
            item.address.toLowerCase().includes(area_short_name.toLowerCase()) ||
            item.address.toLowerCase().includes(area_long_name.toLowerCase())
        )
        console.log(jsonDataFiltered)
        setPosting(jsonDataFiltered)
      } catch (error) {
        console.log("Error fetching the data:", error)
      }
    }
    fetchPosting()
  }, [])

  return (
    <div>
      <h3>Search Results</h3>
      {posting.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posting.map((p, index) => <Post p={p} />)
      )}
    </div>
  )
}

export default SearchResults
