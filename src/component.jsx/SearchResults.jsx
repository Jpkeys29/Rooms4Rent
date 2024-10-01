import React from "react";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';

const SearchResults = () => {
    const [posting, setPosting] = useState([]);

    useEffect(() => {
        const fetchPosting = async () => {
            try {
                const response = await fetch('/dataPostings.json');
                if (!response.ok) {
                    throw new Error('Response was not ok')
                }
                const jsonData = await response.json();
                console.log(jsonData);
                setPosting(jsonData);
            } catch (error) {
                console.log('Error fetching the data:', error)
            }
        };
        fetchPosting();
    }, []);

    return (
        <div>
            <p>Search Results</p>
        </div>
    )
}

export default SearchResults;
