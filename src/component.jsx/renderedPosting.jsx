import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { CardMedia } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanityClient'
import { auth } from "../firebase/config"
import CardPosting from './postingCards/Card'

function RenderedPosting() {
    const [postingDetails, setPostingDetails] = useState([])
    useEffect(() => {
        const fetchPostingDetails = async () => {
            let userId = auth?.currentUser?.uid;
            if (userId) {
                const postingDetails = await client.fetch();
                const query = '*[_type == "roomposting" && id == $userId]';
                const params = { userId: userId }; 
                const postsByAccount = await client.fetch(query, params)
                console.log(postsByAccount)
                setPostingDetails(postsByAccount)
            }    
        }
        fetchPostingDetails();
    }, [auth, auth?.currentUser])
    return (
        <div sx={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%'
          }}>
            {postingDetails.map((p, index) => {
                return( 
                    <CardPosting posting={p} key={index} />   
                )
            })
         }       
        </div>
    )
}

export default RenderedPosting