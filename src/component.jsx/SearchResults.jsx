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
  console.log("log in search results", area_long_name, area_short_name)

  function findCommonWords(str1, str2) {
    // Split the strings into arrays of words
    const words1 = str1.toLowerCase().split(/\W+/)
    const words2 = str2.toLowerCase().split(/\W+/)

    // Find the common words using a Set for faster lookups
    const commonWords = words1.filter((word) => words2.includes(word))

    // Remove duplicates by converting the result to a Set and back to an array
    return [...new Set(commonWords)]
  }
  useEffect(() => {
    const fetchPosting = async () => {
      try {
        const response = await fetch("/dataPostings.json")
        if (!response.ok) {
          throw new Error("Response was not ok")
        }
        const jsonData = await response.json()
        console.log(jsonData)
        // filter data based on search query parameters

        let jsonDataFiltered = jsonData.filter(
          (item) => findCommonWords(area_short_name, item.address).length !== 0
        )
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
